import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();

  const getRecommendations = () => {
    switch (id) {
      case '1':
        return [
          "Recommendatation pour l'audit 360.",
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ];
      case '2':
        return [
          'Recommendatation pour concurrencer les meilleurs.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ];
      case '3':
        return [
          "Recommendatation pour l'engagement des employés.", 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ];
      default:
        return [];
    }
  };

  return (
    <div className="result">
      <h2>Vos résultats pour le diagnostic {id}</h2>

      <h3>Vos réponses :</h3>
      <ul>
        {Object.entries(state.answers).map(([question, answer]) => (
          <li key={question}>{answer}</li>
        ))}
      </ul>
      
      <h3>Nos recommandations :</h3>
      <ul>
        {getRecommendations().map((rec, index) => (
          <li key={index}>{rec}</li>
        ))}
      </ul>
      
      <div className="contact-link">
        <p>Vous souhaitez aller plus loin ?</p>
        <Link to="/contact" className="cta-button">Contactez-nous</Link>
      </div>
    </div>
  );
};

export default Result;