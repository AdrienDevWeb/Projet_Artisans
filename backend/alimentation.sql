-- Insertion des catégories
INSERT INTO categories (nom) VALUES ('Alimentation'), ('Bâtiment'), ('Services'), ('Fabrication');

-- Insertion des villes
INSERT INTO villes (nom, code_postal) VALUES ('Lyon', '69000'), ('Montélimar', '26200'), ('Evian', '74500'), ('Saint-Étienne', '42000');

-- Insertion des artisans (liés aux IDs ci-dessus)
INSERT INTO artisans (nom_entreprise, description, note, id_categorie, id_ville) VALUES 
('Boucherie Dumont', 'Artisan boucher de qualité', 4.5, 1, 1),
('Au pain chaud', 'Boulangerie traditionnelle', 4.8, 1, 2),
('Orville Salmons', 'Expert en services', 4.2, 3, 3),
('Menuiserie Durand', 'Travaux de bois et rénovation', 4.7, 2, 4);