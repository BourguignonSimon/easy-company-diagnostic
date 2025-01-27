import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

// Import des composants de diagnostic
import DiagnosticIndividuel from './components/DiagnosticIndividuel'
import DiagnosticOrganisationnel from './components/DiagnosticOrganisationnel'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/diagnostic-individuel" element={<DiagnosticIndividuel />} />
        <Route path="/diagnostic-organisationnel" element={<DiagnosticOrganisationnel />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
