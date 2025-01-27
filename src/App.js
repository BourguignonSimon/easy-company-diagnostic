import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Diagnostics from './components/Diagnostics';
import Questionnaire from './components/Questionnaire';
import Result from './components/Result';
import Contact from './components/Contact';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/diagnostics">Diagnostics</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/questionnaire/:id" element={<Questionnaire />} />
          <Route path="/result/:id" element={<Result />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;