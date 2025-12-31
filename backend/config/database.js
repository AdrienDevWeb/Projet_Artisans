const { Sequelize } = require('sequelize');

// Remplace les valeurs entre guillemets par tes infos Alwaysdata
const sequelize = new Sequelize('ton_nom_db', 'ton_utilisateur', 'ton_mot_de_passe', {
  host: 'mysql-artisans.alwaysdata.net', // C'est l'hôte fourni par Alwaysdata
  dialect: 'mysql',
  logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion MySQL Alwaysdata réussie !');
  } catch (error) {
    console.error('❌ Erreur de connexion :', error);
  }
}
testConnection();

module.exports = sequelize;