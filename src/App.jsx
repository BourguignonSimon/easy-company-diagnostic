import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DiagnosticLayout from './components/DiagnosticLayout';
import Home from './pages/Home';
import DiagnosticPage from './pages/diagnostics';
import ResultatPage from './pages/resultat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostic" element={<DiagnosticLayout />}>
          <Route path=":type" element={<DiagnosticPage />} />
        </Route>
        <Route path="/resultat" element={<ResultatPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;