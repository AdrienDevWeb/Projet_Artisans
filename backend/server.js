const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('artisan_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: console.log 
});


const Artisan = sequelize.define('Artisan', {
  nom: DataTypes.STRING,
  description: DataTypes.TEXT,
  ville: DataTypes.STRING,
  specialite_id: DataTypes.INTEGER 
}, { 
  tableName: 'artisans', 
  timestamps: false 
});

app.get('/artisans', async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    console.log("Extraction réussie, nombre d'artisans :", artisans.length);
    res.json(artisans);
  } catch (error) {
    console.error("Erreur SQL :", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log('🚀 Serveur lancé sur http://localhost:5000'));