import React, { useState, useEffect } from 'react';
import { useDiagnostic } from '../context/DiagnosticContext';

/**
 * Composant de notification pour les erreurs globales
 * @param {Object} props - Propriétés du composant
 * @param {string} props.message - Message d'erreur à afficher
 * @param {Function} props.onClose - Fonction de fermeture de la notification
 */
const GlobalErrorNotification = ({ message, onClose }) => {
  return (
    <div 
      className="fixed top-4 right-4 z-50 bg-red-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center space-x-4"
      role="alert"
    >
      <div>
        <strong className="font-bold">Erreur : </strong>
        <span className="block sm:inline">{message}</span>
      </div>
      <button 
        onClick={onClose}
        className="text-white hover:text-red-200 transition-colors"
        aria-label="Fermer"
      >
        ✕
      </button>
    </div>
  );
};

/**
 * Layout principal de l'application
 * Gère la structure globale et les notifications
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Composants enfants à afficher
 */
const Layout = ({ children }) => {
  // Récupération du contexte de diagnostic
  const { error, handleError } = useDiagnostic();
  
  // État local pour gérer la visibilité des notifications
  const [showError, setShowError] = useState(false);

  // Effet pour gérer l'affichage des erreurs globales
  useEffect(() => {
    if (error) {
      setShowError(true);
      
      // Masquage automatique après 5 secondes
      const timer = setTimeout(() => {
        setShowError(false);
        handleError(null); // Réinitialisation de l'erreur
      }, 5000);

      // Nettoyage du timer
      return () => clearTimeout(timer);
    }
  }, [error, handleError]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Notification d'erreur globale */}
      {showError && error && (
        <GlobalErrorNotification 
          message={error}
          onClose={() => {
            setShowError(false);
            handleError(null);
          }}
        />
      )}

      {/* Header de l'application */}
      <header className="bg-easy-navy text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Easy Company Diagnostic</h1>
          {/* Navigation ou autres éléments du header */}
        </div>
      </header>

      {/* Contenu principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer de l'application */}
      <footer className="bg-easy-blue text-white p-4 text-center">
        <p>&copy; 2025 Easy Company. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Layout;
