import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const DiagnosticForm = ({ type = 'rapide' }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [questionnaire, setQuestionnaire] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const loadQuestionnaire = async () => {
      try {
        const response = await fetch(`/src/config/questionnaires/${type}.json`);
        const data = await response.json();
        setQuestionnaire(data);
      } catch (error) {
        console.error('Error loading questionnaire:', error);
      }
    };
    loadQuestionnaire();
  }, [type]);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  if (!questionnaire) return <div>Chargement...</div>;

  const currentSectionData = questionnaire.sections[currentSection];

  const renderQuestion = (question) => {
    switch (question.type) {
      case 'scale':
        return (
          <div key={question.id} className="mb-6">
            <Label className="text-base mb-2">{question.question}</Label>
            <RadioGroup
              onValueChange={(value) => handleAnswer(question.id, parseInt(value))}
              className="flex space-x-4 mt-2"
            >
              {question.scale.map((value, index) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value.toString()} id={`${question.id}-${value}`} />
                  <Label htmlFor={`${question.id}-${value}`}>{question.labels[index]}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case 'multiple_choice':
        return (
          <div key={question.id} className="mb-6">
            <Label className="text-base mb-2">{question.question}</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${question.id}-${index}`}
                    onCheckedChange={(checked) => {
                      const currentAnswers = answers[question.id] || [];
                      const newAnswers = checked
                        ? [...currentAnswers, option]
                        : currentAnswers.filter(a => a !== option);
                      handleAnswer(question.id, newAnswers);
                    }}
                  />
                  <Label htmlFor={`${question.id}-${index}`}>{option}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>{questionnaire.title}</CardTitle>
        <div className="text-sm text-gray-500">
          Temps estimé : {questionnaire.estimated_time}
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">{currentSectionData.title}</h3>
          {currentSectionData.questions.map(question => renderQuestion(question))}
        </div>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
            disabled={currentSection === 0}
          >
            Précédent
          </Button>
          <Button
            onClick={() => {
              if (currentSection < questionnaire.sections.length - 1) {
                setCurrentSection(prev => prev + 1);
              } else {
                // Traitement des réponses finales
                console.log('Réponses finales:', answers);
              }
            }}
          >
            {currentSection < questionnaire.sections.length - 1 ? 'Suivant' : 'Terminer'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DiagnosticForm;