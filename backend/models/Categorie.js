const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Categorie = sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false }
}, { tableName: 'categories', timestamps: false });

module.exports = Categorie;