const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Artisan = sequelize.define('Artisan', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nom: { type: DataTypes.STRING },
    categorie_id: { type: DataTypes.INTEGER }

}, {
    tableName: 'specialites', 
    timestamps: false,
    freezeTableName: true
});

module.exports = Artisan;