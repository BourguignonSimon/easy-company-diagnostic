import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-easy-navy text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src="/public/logo.svg" alt="Easy Company Logo" />
            </Link>
          </div>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`hover:text-easy-gold transition-colors ${
                  location.pathname === '/' ? 'text-easy-gold' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/diagnostic/rapide"
                className={`hover:text-easy-gold transition-colors ${
                  location.pathname === '/diagnostic/rapide' ? 'text-easy-gold' : ''
                }`}
              >
                Diagnostic Rapide
              </Link>
            </li>
            <li>
              <Link
                to="/diagnostic/individuel"
                className={`hover:text-easy-gold transition-colors ${
                  location.pathname === '/diagnostic/individuel' ? 'text-easy-gold' : ''
                }`}
              >
                Diagnostic Individuel
              </Link>
            </li>
            <li>
              <Link
                to="/diagnostic/organisationnel"
                className={`hover:text-easy-gold transition-colors ${
                  location.pathname === '/diagnostic/organisationnel' ? 'text-easy-gold' : ''
                }`}
              >
                Diagnostic Organisationnel
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-easy-gold transition-colors ${
                  location.pathname === '/contact' ? 'text-easy-gold' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-easy-navy mb-6">
            Optimisez votre entreprise avec nos diagnostics
          </h1>
          <p className="text-gray-600 mb-12">
            Nos diagnostics vous permettent d'identifier les forces et faiblesses de votre entreprise
            afin de mettre en place des actions ciblées pour améliorer sa performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/public/diagnostic-1.svg" alt="Diagnostic Rapide" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-easy-navy mb-2">Diagnostic Rapide</h3>
              <p className="text-gray-600">Évaluation stratégique en 2 minutes</p>
              <Link
                to="/diagnostic/rapide"
                className="mt-4 inline-block bg-easy-orange text-white px-4 py-2 rounded-md hover:bg-easy-gold transition-colors"
              >
                Démarrer
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/public/diagnostic-2.svg" alt="Diagnostic Individuel" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-easy-navy mb-2">Diagnostic Individuel</h3>
              <p className="text-gray-600">Analyse approfondie de votre potentiel</p>
              <Link
                to="/diagnostic/individuel"
                className="mt-4 inline-block bg-easy-orange text-white px-4 py-2 rounded-md hover:bg-easy-gold transition-colors"
              >
                Démarrer
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img src="/public/diagnostic-3.svg" alt="Diagnostic Organisationnel" className="h-16 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-easy-navy mb-2">Diagnostic Organisationnel</h3>
              <p className="text-gray-600">Évaluation globale de votre entreprise</p>
              <Link
                to="/diagnostic/organisationnel"
                className="mt-4 inline-block bg-easy-orange text-white px-4 py-2 rounded-md hover:bg-easy-gold transition-colors"
              >
                Démarrer
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Besoin d'aide pour choisir ? Contactez-nous à{' '}
              <a href="mailto:support@easycompany.be" className="text-easy-orange hover:text-easy-gold">
                support@easycompany.be
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
