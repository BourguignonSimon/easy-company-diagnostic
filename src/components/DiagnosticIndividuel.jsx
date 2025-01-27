import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiagnosticIndividuel = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartDiagnostic = () => {
    setIsStarted(true);
    // Logique pour commencer le diagnostic
    console.log("Début du diagnostic individuel");
  };

  if (isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-10">
          <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Questionnaire de Diagnostic Individuel
          </h1>
          
          <p className="text-gray-700 mb-6 text-center">
            Le formulaire de diagnostic est en cours de développement.
          </p>

          <div className="text-center">
            <button 
              onClick={() => setIsStarted(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Diagnostic Individuel
        </h1>
        
        <p className="text-gray-700 mb-6 text-center">
          Ce diagnostic vous permettra d'évaluer vos compétences personnelles, 
          votre potentiel de développement et vos axes d'amélioration.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">
            Objectifs du diagnostic
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Identifier vos points forts</li>
            <li>Comprendre vos axes de développement</li>
            <li>Évaluer votre potentiel</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleStartDiagnostic}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Commencer le diagnostic
          </button>
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

export default DiagnosticIndividuel;
