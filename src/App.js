import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Diagnostics from './components/Diagnostics';
import Questionnaire from './components/Questionnaire';
import Result from './components/Result';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/questionnaire/:id" element={<Questionnaire />} />
            <Route path="/result/:id" element={<Result />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;