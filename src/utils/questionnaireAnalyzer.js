// Analyseur de questionnaires avancé
export const analyzeQuestionnaire = (questionnaire, responses) => {
  const results = {
    title: questionnaire.title,
    sections: {},
    overall: {
      score: 0,
      interpretation: '',
      recommendedActions: [],
      strengths: [],
      areas_for_improvement: []
    }
  };

  let totalScore = 0;
  let totalMaxScore = 0;

  // Analyse par section
  questionnaire.sections.forEach(section => {
    const sectionResults = {
      title: section.title,
      score: 0,
      maxScore: 0,
      percentage: 0,
      questions: {}
    };

    section.questions.forEach(question => {
      const response = responses[question.id];
      
      // Analyse des questions de type échelle
      if (question.type === 'scale') {
        const score = response || 0;
        const maxScore = Math.max(...question.scale);
        
        sectionResults.score += score;
        sectionResults.maxScore += maxScore;
        
        sectionResults.questions[question.id] = {
          question: question.question,
          score: score,
          max_score: maxScore,
          interpretation: getScaleInterpretation(score, maxScore),
          label: question.labels[question.scale.indexOf(score)]
        };
      }
      
      // Analyse des questions à choix multiples
      if (question.type === 'multiple_choice') {
        const selectedOptions = response || [];
        
        sectionResults.questions[question.id] = {
          question: question.question,
          selected_options: selectedOptions,
          interpretation: getMultipleChoiceInterpretation(selectedOptions, question.options)
        };
      }
    });

    // Calcul du score de section
    sectionResults.percentage = sectionResults.maxScore > 0 
      ? (sectionResults.score / sectionResults.maxScore) * 100 
      : 0;

    results.sections[section.id] = sectionResults;
    
    // Calcul du score global
    totalScore += sectionResults.score;
    totalMaxScore += sectionResults.maxScore;
  });

  // Score global
  results.overall.score = 
    totalMaxScore > 0 ? (totalScore / totalMaxScore) * 100 : 0;

  // Interprétation globale
  results.overall.interpretation = getOverallInterpretation(results.overall.score);
  
  // Actions recommandées
  results.overall.recommendedActions = getRecommendedActions(
    results.overall.score, 
    results.sections
  );

  // Forces et axes d'amélioration
  const analysis = identifyStrengthsAndWeaknesses(results.sections);
  results.overall.strengths = analysis.strengths;
  results.overall.areas_for_improvement = analysis.areas_for_improvement;

  return results;
};

// Interprétation des questions à échelle
const getScaleInterpretation = (score, maxScore) => {
  const percentage = (score / maxScore) * 100;
  if (percentage < 20) return 'Très faible';
  if (percentage < 40) return 'Faible';
  if (percentage < 60) return 'Moyen';
  if (percentage < 80) return 'Bon';
  return 'Excellent';
};

// Interprétation des questions à choix multiples
const getMultipleChoiceInterpretation = (selectedOptions, allOptions) => {
  const selectionRate = (selectedOptions.length / allOptions.length) * 100;
  if (selectionRate === 0) return 'Aucune option sélectionnée';
  if (selectionRate < 25) return 'Sélection limitée';
  if (selectionRate < 50) return 'Sélection partielle';
  if (selectionRate < 75) return 'Sélection significative';
  return 'Sélection complète';
};

// Interprétation globale
const getOverallInterpretation = (score) => {
  if (score < 20) return 'Besoin critique d\'amélioration';
  if (score < 40) return 'Plusieurs points faibles à travailler';
  if (score < 60) return 'Performance moyenne';
  if (score < 80) return 'Bonnes performances générales';
  return 'Performance excellente';
};

// Actions recommandées
const getRecommendedActions = (overallScore, sections) => {
  const actions = [];

  // Actions générales basées sur le score global
  if (overallScore < 40) {
    actions.push('Réaliser un audit approfondi');
    actions.push('Élaborer un plan de transformation structurel');
  } else if (overallScore < 60) {
    actions.push('Identifier les domaines prioritaires d\'amélioration');
    actions.push('Développer des plans d\'action ciblés');
  } else {
    actions.push('Maintenir et renforcer les pratiques actuelles');
    actions.push('Rechercher des opportunités d\'innovation');
  }

  return actions;
};

// Identification des forces et axes d'amélioration
const identifyStrengthsAndWeaknesses = (sections) => {
  const strengths = [];
  const areas_for_improvement = [];

  Object.values(sections).forEach(section => {
    if (section.percentage >= 80) {
      strengths.push(section.title);
    } else if (section.percentage < 40) {
      areas_for_improvement.push(section.title);
    }
  });

  return { strengths, areas_for_improvement };
};
