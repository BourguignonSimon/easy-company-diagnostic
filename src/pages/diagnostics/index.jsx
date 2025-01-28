import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DiagnosticForm from '@/components/DiagnosticForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DiagnosticPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  if (!['rapide', 'detaille'].includes(type)) {
    return (
      <Card className="w-full max-w-lg mx-auto mt-8">
        <CardContent className="pt-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Type de diagnostic non valide</h2>
            <p className="text-gray-600 mb-6">
              Le type de diagnostic demandé n'existe pas. Veuillez choisir un diagnostic valide.
            </p>
            <Button onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <DiagnosticForm type={type} />
    </div>
  );
};

export default DiagnosticPage;