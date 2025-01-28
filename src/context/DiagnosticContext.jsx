import React, { createContext, useContext, useState } from 'react';

const DiagnosticContext = createContext();

export const DiagnosticProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const [currentSection, setCurrentSection] = useState(0);
  const [diagnosticType, setDiagnosticType] = useState('rapide');

  const value = {
    answers,
    setAnswers,
    currentSection,
    setCurrentSection,
    diagnosticType,
    setDiagnosticType,
  };

  return (
    <DiagnosticContext.Provider value={value}>
      {children}
    </DiagnosticContext.Provider>
  );
};

export const useDiagnostic = () => {
  const context = useContext(DiagnosticContext);
  if (context === undefined) {
    throw new Error('useDiagnostic must be used within a DiagnosticProvider');
  }
  return context;
};

export default DiagnosticContext;