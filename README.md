# Projet "Trouve ton artisan" - Région Auvergne-Rhône-Alpes

Ce projet est une plateforme web permettant de consulter la liste des artisans de la région, de les filtrer par catégorie (Bâtiment, Services, Fabrication, Alimentation) ou par ville, et de consulter leurs fiches détaillées.

## Technologies utilisées
- **Frontend** : React.js, Sass pour le stylisage
- **Backend** : Node.js, Express.js
- **Base de données** : MySQL (Architecture respectant les 3 premières formes normales)

## Installation et Lancement

### 1. Base de données
- Importez le fichier `backend/creation.sql` pour créer la structure.
- Importez le fichier `backend/alimentation.sql` pour remplir les données.

### 2. Backend
```bash
cd backend
npm install
npm start