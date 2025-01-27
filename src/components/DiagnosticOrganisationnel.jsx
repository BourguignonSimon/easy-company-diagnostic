import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiagnosticOrganisationnel = () => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStartDiagnostic = () => {
    setIsStarted(true);
    // Logique pour commencer le diagnostic
    console.log("Début du diagnostic organisationnel");
  };

  if (isStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-10">
          <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">
            Questionnaire de Diagnostic Organisationnel
          </h1>
          
          <p className="text-gray-700 mb-6 text-center">
            Le formulaire de diagnostic est en cours de développement.
          </p>

          <div className="text-center">
            <button 
              onClick={() => setIsStarted(false)}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-xl p-10">
        <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">
          Diagnostic Organisationnel
        </h1>
        
        <p className="text-gray-700 mb-6 text-center">
          Ce diagnostic vous permettra d'évaluer la structure, la performance 
          et la dynamique globale de votre entreprise.
        </p>
        
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-green-800 mb-4">
            Domaines d'analyse
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Culture d'entreprise</li>
            <li>Structure organisationnelle</li>
            <li>Processus et efficacité</li>
            <li>Communication interne</li>
          </ul>
        </div>
        
        <div className="text-center">
          <button 
            onClick={handleStartDiagnostic}
            className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
          >
            Commencer le diagnostic
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-green-600 hover:underline"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticOrganisationnel;
