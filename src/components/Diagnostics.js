import React from 'react';

const Diagnostics = () => {
  const diagnostics = [
    { id: 1, name: 'Audit 360°', icon: '🔎', description: 'Analyse complète de votre entreprise' },
    { id: 2, name: 'Analyse concurrentielle', icon: '🥇', description: 'Benchmarking des acteurs du marché' }, 
    { id: 3, name: 'Expérience employé', icon: '🤝', description: 'Enquête de satisfaction interne' },
  ];
  
  return (
    <div className="diagnostics">
      <h2>Choisissez votre diagnostic :</h2>
      <div className="diag-grid">
        {diagnostics.map(diag => (
          <a key={diag.id} href={`/questionnaire/${diag.id}`} className="diag-card">
            <div className="diag-icon">{diag.icon}</div>
            <h3>{diag.name}</h3>
            <p>{diag.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Diagnostics;