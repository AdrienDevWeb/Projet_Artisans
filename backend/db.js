const mysql = require('mysql2');

// Configuration de la connexion à la base de données
// Remplace les valeurs par tes vrais identifiants si tu en as de spécifiques
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // Ton nom d'utilisateur MySQL
  password: '',      // Ton mot de passe (souvent vide sur local)
  database: 'artisans_db' // Le nom de la base que tu as créée avec le script SQL
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données MySQL avec l\'identifiant ' + connection.threadId);
});

module.exports = connection;