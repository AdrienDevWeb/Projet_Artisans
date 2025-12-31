import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [artisans, setArtisans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/api/artisans')
      .then(res => setArtisans(res.data))
      .catch(err => console.error(err));
  }, []);

  // Filtrage par nom ou catégorie
  const filteredArtisans = artisans.filter(artisan =>
    artisan.nom_entreprise.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.Categorie?.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <header className="header-main">
        <div className="header-container">
          <div className="logo-box">
            <img src="logo.png" alt="Logo" className="main-logo" />
          </div>
          <div className="title-box">
            <h1>Annuaire des Artisans</h1>
          </div>
          <div className="spacer"></div>
        </div>
      </header>

      {/* Barre de Recherche */}
      <section className="search-section">
        <input 
          type="text" 
          placeholder="Rechercher un artisan ou une spécialité (ex: Bâtiment)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </section>

      <main className="content">
        <div className="artisan-grid">
          {filteredArtisans.map(artisan => (
            <article key={artisan.id} className="artisan-card">
              <div className="card-top">
                <h2>{artisan.nom_entreprise}</h2>
                <div className="badge">{artisan.Categorie?.nom}</div>
              </div>
              
              <div className="card-body">
                <p className="location">📍 {artisan.Ville?.nom}</p>
                <p className="description">{artisan.description}</p>
                <p className="rating">Note : <strong>{artisan.note} / 5</strong> ⭐</p>
                
                {/* Bouton cliquable qui ouvre le mail du client */}
                <button 
                  className="btn-contact"
                  onClick={() => window.location.href = `mailto:contact@${artisan.nom_entreprise.toLowerCase().replace(/\s/g, '')}.fr`}
                >
                  Contacter l'artisan
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="footer-blue">
        <div className="container">
          <p>&copy; 2025 - Projet Annuaire des Artisans</p>
          <div className="footer-links">
            <a href="#">Mentions Légales</a>
            <a href="#">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;