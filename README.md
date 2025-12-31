# Annuaire des Artisans - Projet Web

Ce projet est une application web permettant de consulter une liste d'artisans classés par catégories.

## 🛠️ Technologies utilisées
- **Frontend** : React.js, SASS
- **Backend** : Node.js, Express
- **Base de données** : MySQL via Sequelize ORM

## 🚀 Installation

1. **Base de données** :
   - Lancer XAMPP (Apache & MySQL).
   - Créer une base de données nommée `artisan_db`.
   - Importer le fichier SQL ou créer la table `specialites`.

2. **Lancer le Backend** :
   - `cd backend`
   - `npm install`
   - `node server.js`

3. **Lancer le Frontend** :
   - `cd frontend`
   - `npm install`
   - `npm start`

## 📋 Fonctionnalités
- Affichage dynamique des cartes artisans.
- Filtrage par catégorie (Bâtiment, Services, etc.).
- Bouton de contact avec alerte interactive.