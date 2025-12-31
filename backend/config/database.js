const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('artisans_db', 'artisans', 'Hajimenoippo67!!!', {
  host: 'mysql-artisans.alwaysdata.net',
  dialect: 'mysql',
  logging: false,
});

// Test immédiat de l'objet avant export
if (typeof sequelize.define !== 'function') {
  console.error("❌ Erreur critique : Sequelize n'est pas correctement initialisé !");
} else {
  console.log("✅ Instance Sequelize prête à l'export.");
}

module.exports = sequelize;