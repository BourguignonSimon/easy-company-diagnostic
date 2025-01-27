import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl p-10 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Easy Company Diagnostic
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          Choisissez le type de diagnostic qui correspond le mieux à vos besoins
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Diagnostic Rapide
            </h2>
            <p className="text-gray-600 mb-4">
              Vue d'ensemble stratégique en quelques minutes
            </p>
            <Link 
              to="/diagnostic-rapide"
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors inline-block"
            >
              Commencer
            </Link>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Diagnostic Individuel
            </h2>
            <p className="text-gray-600 mb-4">
              Analyse approfondie de votre potentiel personnel
            </p>
            <Link 
              to="/diagnostic-individuel"
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors inline-block"
            >
              Commencer
            </Link>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold text-purple-800 mb-4">
              Diagnostic Organisationnel
            </h2>
            <p className="text-gray-600 mb-4">
              Évaluation complète de votre structure d'entreprise
            </p>
            <Link 
              to="/diagnostic-organisationnel"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors inline-block"
            >
              Commencer
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-gray-500">
            Sélectionnez le diagnostic qui répond le mieux à vos objectifs actuels
          </p>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Easy Company Diagnostic. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
