import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuestionnaireForm = ({ type }) => {
  const [questionnaire, setQuestionnaire] = useState(null);
  const [responses, setResponses] = useState({});
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const loadQuestionnaire = async () => {
      try {
        const response = await fetch(`/questionnaires/diagnostic_${type}.json`);
        const data = await response.json();
        setQuestionnaire(data);
      } catch (error) {
        console.error('Erreur de chargement du questionnaire', error);
      }
    };

    loadQuestionnaire();
  }, [type]);

  const handleResponseChange = (sectionId, questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const renderQuestion = (section, question) => {
    switch (question.type) {
      case 'scale':
        return (
          <div key={question.id} className="mb-6">
            <p className="font-semibold mb-2">{question.question}</p>
            <div className="flex justify-between">
              {question.scale.map((value, index) => (
                <label key={value} className="flex flex-col items-center">
                  <input
                    type="radio"
                    name={question.id}
                    value={value}
                    checked={responses[question.id] === value}
                    onChange={() => handleResponseChange(section.id, question.id, value)}
                    className="mr-2"
                  />
                  {question.labels[index]}
                </label>
              ))}
            </div>
          </div>
        );
      
      case 'multiple_choice':
        return (
          <div key={question.id} className="mb-6">
            <p className="font-semibold mb-2">{question.question}</p>
            {question.options.map(option => (
              <label key={option} className="block">
                <input
                  type="checkbox"
                  value={option}
                  checked={(responses[question.id] || []).includes(option)}
                  onChange={(e) => {
                    const currentResponses = responses[question.id] || [];
                    const newResponses = e.target.checked
                      ? [...currentResponses, option]
                      : currentResponses.filter(resp => resp !== option);
                    handleResponseChange(section.id, question.id, newResponses);
                  }}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

  const handleNextSection = () => {
    if (currentSection < (questionnaire.sections.length - 1)) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Réponses finales :', responses);
    // TODO: Implémenter la logique de soumission et d'analyse
  };

  if (!questionnaire) {
    return <div>Chargement du questionnaire...</div>;
  }

  const currentSectionData = questionnaire.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          {questionnaire.title}
        </h1>
        
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          {currentSectionData.title}
        </h2>
        
        <form>
          {currentSectionData.questions.map(question => 
            renderQuestion(currentSectionData, question)
          )}
        </form>
        
        <div className="flex justify-between mt-6">
          {currentSection > 0 && (
            <button 
              onClick={handlePreviousSection}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
            >
              Section précédente
            </button>
          )}
          
          {currentSection < questionnaire.sections.length - 1 ? (
            <button 
              onClick={handleNextSection}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 ml-auto"
            >
              Section suivante
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 ml-auto"
            >
              Terminer le diagnostic
            </button>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-blue-600 hover:underline"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
