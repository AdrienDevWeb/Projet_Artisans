const express = require('express');
const cors = require('cors');
const db = require('./db'); // Import de la connexion BDD que nous avons créée

const app = express();

// 1. SÉCURITÉ CORS : Configuration restrictive pour valider les critères de sécurité
const corsOptions = {
    // On autorise uniquement ton frontend local et ton futur site en ligne
    origin: ['http://localhost:3000', 'https://ton-site-artisan.vercel.app'], 
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// 2. ROUTES API : Pour envoyer les données des artisans au Frontend

// Route pour récupérer TOUS les artisans
app.get('/api/artisans', (req, res) => {
    const sql = "SELECT * FROM artisans";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Erreur SQL:", err);
            return res.status(500).json({ error: "Erreur lors de la récupération des données" });
        }
        res.json(results);
    });
});

// Route pour récupérer un artisan spécifique par son ID
app.get('/api/artisans/:id', (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM artisans WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result[0]);
    });
});

// 3. LANCEMENT DU SERVEUR
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});