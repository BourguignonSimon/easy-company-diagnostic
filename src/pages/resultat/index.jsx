import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ResultatPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { scores, recommendations } = location.state || {};

  if (!scores || !recommendations) {
    return (
      <Card className="w-full max-w-lg mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Aucun résultat disponible</h2>
            <p className="text-gray-600 mb-6">
              Veuillez d'abord compléter un diagnostic pour voir vos résultats.
            </p>
            <Button onClick={() => navigate('/')}>
              Commencer un diagnostic
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chartData = Object.entries(scores).map(([category, value]) => ({
    name: category,
    score: value
  }));

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Résultats du Diagnostic</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#2563eb"
                  strokeWidth={2}
                  dot={{ strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <Alert key={index} className={index < 3 ? 'bg-red-50' : 'bg-blue-50'}>
                <AlertDescription>{rec}</AlertDescription>
              </Alert>
            ))}
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
            <Button onClick={() => window.print()}>
              Télécharger le rapport
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultatPage;