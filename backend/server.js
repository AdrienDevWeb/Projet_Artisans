const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('artisans_db', 'artisans', 'Hajimenoippo67!!!', {
  host: 'mysql-artisans.alwaysdata.net',
  dialect: 'mysql',
  logging: false,
});

const Categorie = sequelize.define('Categorie', {
    nom: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'categories', timestamps: false });

const Ville = sequelize.define('Ville', {
    nom: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'villes', timestamps: false });

const Artisan = sequelize.define('Artisan', {
    nom_entreprise: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    note: { type: DataTypes.DECIMAL(2, 1) },
    id_categorie: { type: DataTypes.INTEGER },
    id_ville: { type: DataTypes.INTEGER }
}, { tableName: 'artisans', timestamps: false });

Artisan.belongsTo(Categorie, { foreignKey: 'id_categorie' });
Artisan.belongsTo(Ville, { foreignKey: 'id_ville' });

app.get('/api/artisans', async (req, res) => {
    try {
        const artisans = await Artisan.findAll({ include: [Categorie, Ville] });
        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("✅ Serveur prêt sur le port 5000"));