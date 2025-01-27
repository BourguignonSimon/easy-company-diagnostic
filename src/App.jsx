import React, { useState } from 'react';
import DiagnosticForm from './components/DiagnosticForm';
import DiagnosticResults from './components/DiagnosticResults';
import DiagnosticAnalyzer from './utils/DiagnosticAnalyzer';

const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [diagnosticResults, setDiagnosticResults] = useState(null);
  const [questionnaireType, setQuestionnaireType] = useState('rapide');

  const handleDiagnosticComplete = (answers) => {
    const analyzer = new DiagnosticAnalyzer(answers, questionnaireType);
    const scores = analyzer.calculateScores();
    const recommendations = analyzer.generateRecommendations();

    setDiagnosticResults({
      scores,
      recommendations
    });
    setShowResults(true);
  };

  const handleStartNew = () => {
    setShowResults(false);
    setDiagnosticResults(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {!showResults ? (
        <DiagnosticForm 
          onComplete={handleDiagnosticComplete}
          onTypeChange={setQuestionnaireType}
        />
      ) : (
        <div>
          <DiagnosticResults {...diagnosticResults} />
          <div className="text-center mt-6">
            <button
              onClick={handleStartNew}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Démarrer un nouveau diagnostic
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;