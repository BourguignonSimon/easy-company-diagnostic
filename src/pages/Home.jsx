import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="/public/logo.svg" alt="Easy Company Logo" />
          </div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#diagnostics">Diagnostics</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Easy is Smart - Smart is Easy</h1>
          <p>Évaluez la performance et la santé de votre entreprise</p>
          <a href="/diagnostic/rapide" className="btn">Commencer un diagnostic</a>
        </div>
        <div className="hero-image">
          <img src="/public/hero-image.jpg" alt="Easy Company Solutions" />
        </div>
      </section>

      <section className="diagnostics" id="diagnostics">
        <h2>Nos Diagnostics</h2>
        <div className="diagnostic-grid">
          <div className="diagnostic-card">
            <img src="/public/diagnostic-1.svg" alt="Diagnostic Rapide" />
            <h3>Diagnostic Rapide</h3>
            <p>Évaluation stratégique en quelques minutes</p>
            <a href="/diagnostic/rapide" className="btn">Démarrer</a>
          </div>
          <div className="diagnostic-card">
            <img src="/public/diagnostic-2.svg" alt="Diagnostic Individuel" />
            <h3>Diagnostic Individuel</h3>
            <p>Analyse approfondie de votre potentiel</p>
            <a href="/diagnostic/individuel" className="btn">Démarrer</a>
          </div>
          <div className="diagnostic-card">
            <img src="/public/diagnostic-3.svg" alt="Diagnostic Organisationnel" />
            <h3>Diagnostic Organisationnel</h3>
            <p>Évaluation globale de votre entreprise</p>
            <a href="/diagnostic/organisationnel" className="btn">Démarrer</a>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/public/logo.svg" alt="Easy Company Logo" />
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#diagnostics">Diagnostics</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2023 Easy Company Diagnostic. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
