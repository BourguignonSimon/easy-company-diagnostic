import React from 'react';
import ReactDOM from 'react-dom/client';
import DiagnosticForm from './components/DiagnosticForm';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="min-h-screen bg-gray-50 py-8">
      <DiagnosticForm />
    </div>
  </React.StrictMode>,
);