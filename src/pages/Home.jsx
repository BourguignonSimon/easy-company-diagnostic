import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const diagnosticTypes = [
  {
    id: 'rapide',
    title: 'Diagnostic Rapide',
    description: 'Évaluation rapide de votre organisation en 2 minutes',
    duration: '2 minutes',
    icon: '⏱',
    benefits: ['Aperçu global rapide', 'Identification des priorités', 'Recommandations immédiates']
  },
  {
    id: 'detaille',
    title: 'Diagnostic Détaillé',
    description: 'Analyse approfondie de votre organisation',
    duration: '5 minutes',
    icon: '📋',
    benefits: ['Analyse complète', 'Recommandations détaillées', 'Plan d\'action personnalisé']
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Diagnostics Easy Company
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Découvrez comment optimiser votre organisation avec nos outils de diagnostic.
            Choisissez le format qui vous convient le mieux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {diagnosticTypes.map((diagnostic) => (
            <Card 
              key={diagnostic.id}
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(`/diagnostic/${diagnostic.id}`)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="text-3xl">{diagnostic.icon}</span>
                  {diagnostic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{diagnostic.description}</p>
                <div className="mb-4 text-sm text-gray-500">
                  ⏰ Durée estimée : {diagnostic.duration}
                </div>
                <div className="space-y-2">
                  <p className="font-medium">Avantages :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    {diagnostic.benefits.map((benefit, index) => (
                      <li key={index} className="text-gray-600">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Besoin d'aide pour choisir ? Contactez-nous à support@easycompany.be
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;