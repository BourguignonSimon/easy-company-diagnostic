import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import DiagnosticLayout from './components/DiagnosticLayout';
import {
  OrganisationnelDiagnostic,
  LeadershipDiagnostic,
  SatisfactionDiagnostic,
  CommunicationDiagnostic
} from './pages/diagnostics';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diagnostic" element={<DiagnosticLayout />}>
          <Route path="organisationnel" element={<OrganisationnelDiagnostic />} />
          <Route path="leadership" element={<LeadershipDiagnostic />} />
          <Route path="satisfaction" element={<SatisfactionDiagnostic />} />
          <Route path="communication" element={<CommunicationDiagnostic />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;