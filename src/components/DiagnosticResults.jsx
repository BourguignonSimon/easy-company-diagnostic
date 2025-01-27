import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart, 
  Pie, 
  Cell,
  ResponsiveContainer 
} from 'recharts';

const DiagnosticResults = ({ results, questionnaire }) => {
  // Préparer les données pour le graphique à barres
  const sectionScoresData = Object.entries(results.sections).map(([key, section]) => ({
    name: section.title,
    score: section.scorePercentage
  }));

  // Couleurs pour le graphique
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-xl p-10">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Résultats du Diagnostic
        </h1>

        {/* Résumé global */}
        <div className="bg-blue-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Évaluation Globale
          </h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-medium">Score Global : {results.overall.score.toFixed(1)}%</p>
              <p className="text-gray-700">
                Interprétation : {results.overall.interpretation}
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Actions Recommandées
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {results.overall.recommendedActions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Graphique des scores par section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Performance par Section
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={sectionScoresData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" name="Score (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Détails par section */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
            Détails des Sections
          </h2>
          {Object.entries(results.sections).map(([sectionId, section]) => (
            <div key={sectionId} className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                {section.title}
              </h3>
              <p className="mb-3">
                Score de section : {section.scorePercentage.toFixed(1)}%
              </p>
              {Object.entries(section.questions).map(([questionId, question]) => (
                <div key={questionId} className="mb-2">
                  <p className="font-medium">{question.question}</p>
                  {question.score !== undefined && (
                    <p>Score : {question.score} - {question.interpretation}</p>
                  )}
                  {question.selectedOptions && (
                    <p>Options sélectionnées : {question.selectedOptions.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticResults;
