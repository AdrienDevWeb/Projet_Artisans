const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('artisan_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion MySQL réussie !');
  } catch (error) {
    console.error('❌ Erreur de connexion :', error);
  }
}
testConnection();

module.exports = sequelize;