import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import QuestionnaireForm from './components/QuestionnaireForm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/diagnostic-rapide" element={<QuestionnaireForm type="rapide_strategique" />} />
        <Route path="/diagnostic-individuel" element={<QuestionnaireForm type="individuel_approfondi" />} />
        <Route path="/diagnostic-organisationnel" element={<QuestionnaireForm type="organisationnel_complet" />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
