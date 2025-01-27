
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DiagnosticResults from './DiagnosticResults';
import { analyzeQuestionnaire } from '../utils/questionnaireAnalyzer';

const DiagnosticRapideForm = () => {
  const [questionnaire, setQuestionnaire] = useState(null);
  const [responses, setResponses] = useState({});
  const [currentSection, setCurrentSection] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [results, setResults] = useState(null);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestionnaire = async () => {
      try {
        const response = await fetch('/questionnaires/diagnostic_rapide_strategique.json');
        const data = await response.json();
        setQuestionnaire(data);
      } catch (error) {
        console.error('Erreur de chargement du questionnaire', error);
        navigate('/');
      }
    };

    loadQuestionnaire();
  }, [navigate]);

  useEffect(() => {
    if (questionnaire) {
      const totalSections = questionnaire.sections.length;
      const progressPercentage = ((currentSection + 1) / totalSections) * 100;
      setProgress(progressPercentage);
    }
  }, [currentSection, questionnaire]);

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
          <div key={question.id} className="mb-6 p-4 bg-easy-blue-50 rounded-lg">
            <p className="font-semibold text-lg mb-3 text-easy-blue-800">{question.question}</p>
            <div className="flex justify-between space-x-2">
              {question.scale.map((value, index) => (
                <label 
                  key={value} 
                  className={`flex flex-col items-center cursor-pointer transform transition-all 
                    ${responses[question.id] === value ? 'scale-105' : 'opacity-70'}`}
                >
                  <input
                    type="radio"
                    name={question.id}
                    value={value}
                    checked={responses[question.id] === value}
                    onChange={() => handleResponseChange(section.id, question.id, value)}
                    className="hidden"
                  />
                  <span 
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold 
                      ${responses[question.id] === value 
                        ? 'bg-easy-blue-600 text-easy-white' 
                        : 'bg-easy-blue-200 text-easy-blue-800'}`}
                  >
                    {value}
                  </span>
                  <span className="mt-2 text-sm text-easy-gray">{question.labels[index]}</span>
                </label>
              ))}
            </div>
          </div>
        );
      
      case 'multiple_choice':
        return (
          <div key={question.id} className="mb-6 p-4 bg-easy-green-50 rounded-lg">
            <p className="font-semibold text-lg mb-3 text-easy-green-800">{question.question}</p>
            <div className="grid md:grid-cols-2 gap-3">
              {question.options.map(option => (
                <label 
                  key={option} 
                  className="flex items-center space-x-3 cursor-pointer hover:bg-easy-green-100 p-2 rounded"
                >
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
                    className="h-4 w-4 text-easy-green-600 focus:ring-easy-green-500 border-gray-300 rounded"
                  />
                  <span className="text-easy-gray">{option}</span>
                </label>
              ))}
            </div>
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
    if (Object.keys(responses).length > 0) {
      const analysisResults = analyzeQuestionnaire(questionnaire, responses);
      setResults(analysisResults);
      setIsCompleted(true);
    } else {
      alert('Veuillez répondre à au moins une question');
    }
  };

  if (!questionnaire) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-easy-blue-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-easy-blue-500 mb-4 mx-auto"></div>
          <p className="text-xl text-easy-blue-700">Chargement du questionnaire...</p>
        </div>
      </div>
    );
  }

  if (isCompleted && results) {
    return <DiagnosticResults results={results} questionnaire={questionnaire} />;
  }

  const currentSectionData = questionnaire.sections[currentSection];

  return (
    <div className="min-h-screen bg-gradient-to-br from-easy-blue-50 to-easy-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-easy-white shadow-2xl rounded-xl p-10 relative">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-easy-blue-200">
          <div 
            className="h-full bg-easy-blue-600 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h1 className="text-3xl font-bold text-easy-blue-900 mb-6 text-center">
          {questionnaire.title}
        </h1>
        
        <h2 className="text-2xl font-semibold text-easy-blue-700 mb-6 text-center">
          {currentSectionData.title}
        </h2>
        
        <form>
          {currentSectionData.questions.map(question => 
            renderQuestion(currentSectionData, question)
          )}
        </form>
        
        <div className="flex justify-between mt-8">
          {currentSection > 0 && (
            <button 
              onClick={handlePreviousSection}
              className="bg-easy-blue-500 text-easy-white px-6 py-3 rounded-full hover:bg-easy-blue-600 transition-colors"
            >
              Section précédente
            </button>
          )}
          
          {currentSection < questionnaire.sections.length - 1 ? (
            <button 
              onClick={handleNextSection}
              className="bg-easy-blue-500 text-easy-white px-6 py-3 rounded-full hover:bg-easy-blue-600 transition-colors ml-auto"
            >
              Section suivante
            </button>
          ) : (
            <button 
              onClick={handleSubmit}
              className="bg-easy-green-500 text-easy-white px-8 py-3 rounded-full hover:bg-easy-green-600 transition-colors ml-auto"
            >
              Terminer le diagnostic
            </button>
          )}
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-easy-blue-600 hover:underline"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticRapideForm;
