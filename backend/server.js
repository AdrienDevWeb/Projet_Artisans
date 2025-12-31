const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

// Autorise ton futur site web à interroger ce serveur
app.use(cors());
app.use(express.json());

// CONFIGURATION CONNEXION ALWAYSDATA
const db = mysql.createConnection({
    host: 'mysql-adriendevweb.alwaysdata.net', // Vérifie bien ton hôte Alwaysdata
    user: 'artisans',                      // Ton nom d'utilisateur Alwaysdata
    password: 'Hajimenoippo67!!!',             // METS TON VRAI MOT DE PASSE ICI
    database: 'artisans_db'      // Le nom de ta base sur Alwaysdata
});

db.connect((err) => {
    if (err) {
        console.error('❌ Erreur de connexion MariaDB:', err);
        return;
    }
    console.log('✅ Connecté à la base de données Alwaysdata');
});

// ROUTE : Récupérer tous les artisans
app.get('/api/artisans', (req, res) => {
    const sql = `
        SELECT artisans.*, categories.nom AS categorie_nom 
        FROM artisans 
        JOIN categories ON artisans.categorie_id = categories.id
    `;
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// ROUTE : Récupérer les catégories (pour ton menu de recherche)
app.get('/api/categories', (req, res) => {
    const sql = "SELECT * FROM categories";
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// PORT DYNAMIQUE (Très important pour l'hébergement)
// Alwaysdata fournit un port, sinon on utilise 5000 par défaut
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});