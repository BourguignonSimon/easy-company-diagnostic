import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DiagnosticRapide from './pages/DiagnosticRapide';
import DiagnosticIndividuel from './pages/DiagnosticIndividuel';
import DiagnosticOrganisationnel from './pages/DiagnosticOrganisationnel';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diagnostic/rapide" element={<DiagnosticRapide />} />
          <Route path="/diagnostic/individuel" element={<DiagnosticIndividuel />} />
          <Route path="/diagnostic/organisationnel" element={<DiagnosticOrganisationnel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
