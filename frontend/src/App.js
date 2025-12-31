import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [artisans, setArtisans] = useState([]);
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    
    axios.get('http://localhost:5000/artisans')
      .then(res => setArtisans(res.data))
      .catch(err => console.error("Erreur de connexion :", err));
  }, []);

  const categories = ['Tous', 'Bâtiment', 'Services', 'Fabrication', 'Alimentation'];

  
  const filteredArtisans = filter === 'Tous' 
    ? artisans 
    : artisans.filter(a => {
        const catMap = { 'Bâtiment': 1, 'Services': 2, 'Fabrication': 3, 'Alimentation': 4 };
        return Number(a.specialite_id) === catMap[filter];
      });

  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          {/* Logo cliquable pour réinitialiser le filtre */}
          <button onClick={() => setFilter('Tous')} className="logo-btn">
            <img src="/logo.png" alt="Logo" className="logo" />
          </button>
          
          <h1 className="title">Annuaire des Artisans</h1>
        </div>
        
        <div className="filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)} 
              className={filter === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="artisan-list">
        {filteredArtisans.length > 0 ? (
          filteredArtisans.map(artisan => (
            <div className="artisan-card" key={artisan.id}>
              <h3>{artisan.nom}</h3>
              <p className="city">📍 {artisan.ville || "Ville non renseignée"}</p>
              <p className="description">{artisan.description || "Aucune description"}</p>
              <button 
                className="contact-btn" 
                onClick={() => alert(`Demande de contact envoyée à ${artisan.nom}`)}
              >
                Contact
              </button>
            </div>
          ))
        ) : (
          <p className="no-data">Chargement des données ou aucun résultat...</p>
        )}
      </main>

      <footer className="footer">
        <p>&copy; 2025 Annuaire Artisans Pro</p>
        <div className="footer-links">
          <a href="#mentions">Mentions Légales</a>
          <a href="#cookies">Cookies</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;