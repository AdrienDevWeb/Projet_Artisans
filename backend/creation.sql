-- Création de la table des catégories (Spécialités)
CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL
);

-- Création de la table des villes
CREATE TABLE villes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    code_postal VARCHAR(5)
);

-- Création de la table des artisans avec clés étrangères
CREATE TABLE artisans (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom_entreprise VARCHAR(255) NOT NULL,
    description TEXT,
    note DECIMAL(2,1),
    id_categorie INT,
    id_ville INT,
    FOREIGN KEY (id_categorie) REFERENCES categories(id),
    FOREIGN KEY (id_ville) REFERENCES villes(id)
);