import React from 'react';
import ReactDOM from 'react-dom/client';
import { DiagnosticProvider } from './context/DiagnosticContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DiagnosticProvider>
      <App />
    </DiagnosticProvider>
  </React.StrictMode>
);