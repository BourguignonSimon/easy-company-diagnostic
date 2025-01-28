import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDiagnostic } from '../context/DiagnosticContext';

// Composants de chargement et d'erreur
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-easy-blue"></div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong className="font-bold">Erreur ! </strong>
    <span className="block sm:inline">{message}</span>
  </div>
);

/**
 * Composant de formulaire de diagnostic
 * Gère différents types de diagnostics et leurs états
 */
const DiagnosticForm = () => {
  // Récupération du type de diagnostic depuis l'URL
  const { type } = useParams();
  const navigate = useNavigate();

  // Utilisation du contexte de diagnostic
  const {
    answers,
    setAnswers,
    currentSection,
    setCurrentSection,
    diagnosticType,
    setDiagnosticType,
    isLoading,
    setIsLoading,
    error,
    handleError
  } = useDiagnostic();

  // États locaux pour la validation
  const [localError, setLocalError] = useState(null);

  // Effet pour initialiser le diagnostic
  useEffect(() => {
    // Validation du type de diagnostic
    const validTypes = ['rapide', 'complet', 'individuel', 'organisationnel'];
    
    if (!validTypes.includes(type)) {
      handleError('Type de diagnostic invalide');
      navigate('/');
      return;
    }

    // Réinitialisation du diagnostic
    try {
      setIsLoading(true);
      setDiagnosticType(type);
      setCurrentSection(0);
      setAnswers({});
    } catch (err) {
      handleError('Erreur lors de l\'initialisation du diagnostic');
    } finally {
      setIsLoading(false);
    }
  }, [type, navigate, setDiagnosticType, setCurrentSection, setAnswers, handleError, setIsLoading]);

  /**
   * Validation et soumission des réponses
   * @param {Object} newAnswers - Nouvelles réponses à valider
   */
  const validateAndSubmitAnswers = (newAnswers) => {
    try {
      // Validation des réponses
      if (!newAnswers || Object.keys(newAnswers).length === 0) {
        setLocalError('Veuillez répondre à toutes les questions');
        return false;
      }

      // Logique spécifique selon le type de diagnostic
      switch (type) {
        case 'rapide':
          // Validation spécifique pour diagnostic rapide
          break;
        case 'complet':
          // Validation spécifique pour diagnostic complet
          break;
        default:
          break;
      }

      // Mise à jour des réponses
      setAnswers(newAnswers);
      setLocalError(null);
      return true;
    } catch (err) {
      handleError('Erreur de validation des réponses');
      return false;
    }
  };

  // Gestion des erreurs globales
  if (error) {
    return <ErrorMessage message={error} />;
  }

  // État de chargement
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="diagnostic-form">
      {/* Affichage des erreurs locales */}
      {localError && <ErrorMessage message={localError} />}

      {/* Contenu du formulaire */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Diagnostic {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        
        {/* Formulaire de diagnostic (à compléter) */}
        <div>
          {/* Logique de rendu du formulaire */}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticForm;
