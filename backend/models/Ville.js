const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ville = sequelize.define('Ville', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING, allowNull: false },
    code_postal: { type: DataTypes.STRING }
}, { tableName: 'villes', timestamps: false });

module.exports = Ville;