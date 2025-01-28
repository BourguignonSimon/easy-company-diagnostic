import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const diagnosticTypes = [
  {
    id: 'organisationnel',
    title: 'Diagnostic Organisationnel',
    description: 'Évaluez la structure et les processus de votre organisation',
    duration: '5-10 minutes',
    icon: '🏢'
  },
  {
    id: 'leadership',
    title: 'Diagnostic Leadership',
    description: 'Analysez vos compétences en leadership et management',
    duration: '5-10 minutes',
    icon: '👥'
  },
  {
    id: 'satisfaction',
    title: 'Diagnostic Satisfaction Équipe',
    description: 'Mesurez le niveau de satisfaction et d\'engagement de vos équipes',
    duration: '5-10 minutes',
    icon: '😊'
  },
  {
    id: 'communication',
    title: 'Diagnostic Communication',
    description: 'Évaluez l\'efficacité de votre communication interne',
    duration: '5-10 minutes',
    icon: '💬'
  }
];

const Home = () => {
  const handleDiagnosticClick = (diagnosticId) => {
    window.location.href = `/diagnostic/${diagnosticId}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Diagnostics Easy Company</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sélectionnez le type de diagnostic que vous souhaitez réaliser pour votre organisation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {diagnosticTypes.map((diagnostic) => (
            <Card 
              key={diagnostic.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDiagnosticClick(diagnostic.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{diagnostic.icon}</span>
                  {diagnostic.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{diagnostic.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">⏱️</span>
                  <span>{diagnostic.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;