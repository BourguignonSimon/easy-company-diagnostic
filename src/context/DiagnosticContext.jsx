import React, { createContext, useContext, useState, useCallback } from 'react';

// Création du contexte pour le diagnostic
const DiagnosticContext = createContext();

/**
 * Fournisseur de contexte pour gérer l'état global du diagnostic
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Composants enfants
 */
export const DiagnosticProvider = ({ children }) => {
  // États pour suivre différents aspects du diagnostic
  const [answers, setAnswers] = useState({});
  const [currentSection, setCurrentSection] = useState(0);
  const [diagnosticType, setDiagnosticType] = useState('rapide');
  
  // Nouvel état pour gérer le chargement et les erreurs
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Méthode sécurisée pour mettre à jour les réponses
   * @param {Object} newAnswers - Nouvelles réponses à ajouter
   */
  const updateAnswers = useCallback((newAnswers) => {
    try {
      setAnswers(prev => ({
        ...prev,
        ...newAnswers
      }));
    } catch (err) {
      setError('Erreur lors de la mise à jour des réponses');
      console.error(err);
    }
  }, []);

  /**
   * Réinitialisation complète du diagnostic
   */
  const resetDiagnostic = useCallback(() => {
    setAnswers({});
    setCurrentSection(0);
    setError(null);
  }, []);

  /**
   * Gestion des erreurs de diagnostic
   * @param {string} errorMessage - Message d'erreur à afficher
   */
  const handleError = useCallback((errorMessage) => {
    setError(errorMessage);
    setIsLoading(false);
  }, []);

  // Valeur du contexte avec tous les états et méthodes
  const value = {
    // États
    answers,
    currentSection,
    diagnosticType,
    isLoading,
    error,

    // Méthodes
    setAnswers: updateAnswers,
    setCurrentSection,
    setDiagnosticType,
    setIsLoading,
    
    // Méthodes utilitaires
    resetDiagnostic,
    handleError
  };

  return (
    <DiagnosticContext.Provider value={value}>
      {children}
    </DiagnosticContext.Provider>
  );
};

/**
 * Hook personnalisé pour utiliser le contexte de diagnostic
 * @returns {Object} Contexte du diagnostic
 * @throws {Error} Si utilisé en dehors d'un DiagnosticProvider
 */
export const useDiagnostic = () => {
  const context = useContext(DiagnosticContext);
  
  if (context === undefined) {
    throw new Error('useDiagnostic doit être utilisé dans un DiagnosticProvider');
  }
  
  return context;
};

export default DiagnosticContext;
