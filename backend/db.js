const { Sequelize } = require('sequelize');

// Connexion base MySQL
const sequelize = new Sequelize('artisan_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, 
});

// Test de connexion
sequelize.authenticate()
  .then(() => console.log('✅ Connexion MySQL réussie !'))
  .catch(err => console.error('❌ Impossible de se connecter à MySQL :', err));

module.exports = sequelize;