const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Vérifie bien ../db
const Categorie = require('./Categorie');
const Ville = require('./Ville');

const Artisan = sequelize.define('Artisan', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom_entreprise: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    note: { type: DataTypes.DECIMAL(2, 1) },
    id_categorie: { type: DataTypes.INTEGER },
    id_ville: { type: DataTypes.INTEGER }
}, { tableName: 'artisans', timestamps: false });

// Ces lignes sont essentielles pour ton 17/20 (Jointures SQL)
Artisan.belongsTo(Categorie, { foreignKey: 'id_categorie' });
Artisan.belongsTo(Ville, { foreignKey: 'id_ville' });

module.exports = Artisan;