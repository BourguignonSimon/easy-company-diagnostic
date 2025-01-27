export const analyzeQuestionnaire = (questionnaire, responses) => {
  const results = {
    sections: {},
    overall: {
      score: 0,
      interpretation: '',
      recommendedActions: []
    }
  };

  // Analyse par section
  questionnaire.sections.forEach(section => {
    const sectionResults = {
      title: section.title,
      score: 0,
      maxScore: 0,
      questions: {}
    };

    section.questions.forEach(question => {
      const response = responses[question.id];
      
      if (question.type === 'scale') {
        const score = response || 0;
        sectionResults.score += score;
        sectionResults.maxScore += 5; // score max de l'échelle
        
        sectionResults.questions[question.id] = {
          question: question.question,
          score: score,
          interpretation: getScaleInterpretation(score)
        };
      }
      
      if (question.type === 'multiple_choice') {
        const selectedOptions = response || [];
        sectionResults.questions[question.id] = {
          question: question.question,
          selectedOptions: selectedOptions,
          interpretation: getMultipleChoiceInterpretation(selectedOptions)
        };
      }
    });

    // Calcul du score en pourcentage
    sectionResults.scorePercentage = 
      sectionResults.maxScore > 0 
        ? (sectionResults.score / sectionResults.maxScore) * 100 
        : 0;

    results.sections[section.id] = sectionResults;
  });

  // Calcul du score global
  const sectionScores = Object.values(results.sections).map(s => s.scorePercentage);
  results.overall.score = 
    sectionScores.reduce((a, b) => a + b, 0) / sectionScores.length;

  results.overall.interpretation = getOverallInterpretation(results.overall.score);
  results.overall.recommendedActions = getRecommendedActions(results.overall.score);

  return results;
};

const getScaleInterpretation = (score) => {
  const interpretations = [
    'Très faible',
    'Faible',
    'Moyen',
    'Bon',
    'Excellent'
  ];
  return interpretations[score - 1] || 'Non renseigné';
};

const getMultipleChoiceInterpretation = (selectedOptions) => {
  if (selectedOptions.length === 0) return 'Aucune option sélectionnée';
  return `${selectedOptions.length} option(s) sélectionnée(s)`;
};

const getOverallInterpretation = (score) => {
  if (score < 20) return 'Besoin critique d\'amélioration';
  if (score < 40) return 'Plusieurs points faibles à travailler';
  if (score < 60) return 'Performance moyenne';
  if (score < 80) return 'Bonnes performances générales';
  return 'Performance excellente';
};

const getRecommendedActions = (score) => {
  const actions = [
    'Besoin critique d\'amélioration' => [
      'Réaliser un audit approfondi',
      'Mettre en place un plan de transformation',
      'Former l\'équipe de management'
    ],
    'Plusieurs points faibles à travailler' => [
      'Identifier les domaines prioritaires',
      'Développer des plans d\'action ciblés',
      'Renforcer la communication interne'
    ],
    'Performance moyenne' => [
      'Optimiser les processus existants',
      'Investir dans le développement des compétences',
      'Encourager l\'innovation'
    ],
    'Bonnes performances générales' => [
      'Maintenir les pratiques actuelles',
      'Rechercher des opportunités d\'amélioration continue',
      'Valoriser les équipes performantes'
    ],
    'Performance excellente' => [
      'Documenter et partager les bonnes pratiques',
      'Continuer à investir dans le développement',
      'Rester à la pointe de l\'innovation'
    ]
  ];

  if (score < 20) return actions['Besoin critique d\'amélioration'];
  if (score < 40) return actions['Plusieurs points faibles à travailler'];
  if (score < 60) return actions['Performance moyenne'];
  if (score < 80) return actions['Bonnes performances générales'];
  return actions['Performance excellente'];
};
