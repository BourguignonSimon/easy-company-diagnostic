import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Questionnaire = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = {
    1: [
      { id: 1, text: "Quelle est la taille de votre entreprise ?" },
      { id: 2, text: "Quel est votre secteur d'activité ?" },
    ],
    2: [
      { id: 1, text: "Qui sont vos principaux concurrents ?" },
      { id: 2, text: "Quel est votre avantage compétitif ?" },
    ],
    3: [
      { id: 1, text: "Êtes-vous satisfait de votre environnement de travail ?" },
      { id: 2, text: "Recommanderiez-vous l'entreprise à un proche ?" },
    ],
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion]: value });
    if (currentQuestion < questions[id].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate(`/result/${id}`, { state: { answers } });
    }
  };

  return (
    <div className="questionnaire">
      <div className="breadcrumb">
        Question {currentQuestion + 1}/{questions[id].length}
      </div>
      <h2>{questions[id][currentQuestion].text}</h2>

      <div className="answer-buttons">
        {["Oui", "Non", "Peut-être"].map(option => (
          <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
        ))}
      </div>
      
      {currentQuestion > 0 && (
        <button className="prev-button" onClick={() => setCurrentQuestion(currentQuestion - 1)}>
          Précédent
        </button>
      )}
    </div>
  );
};

export default Questionnaire;