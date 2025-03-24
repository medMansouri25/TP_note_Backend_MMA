🚀 Projet Backend Rhum : Guide d'installation et Fonctionnalités

📦 Installation des dépendances et outils nécessaires

Avant de commencer, assure-toi d’avoir installé Node.js et npm (inclus dans Node.js), puis suis ces étapes pour mettre en place l'environnement nécessaire à ton projet :

Étape 1 : Cloner le projet

-->git clone <lien_de_ton_repo>

-->cd <nom_dossier_projet>

Étape 2 : Installer les paquets requis avec npm

-Installe les modules nécessaires à ton projet à l'aide de npm :

-->npm install express mongoose bcrypt jsonwebtoken dotenv cors body-parser

🛠️ Configuration et Lancement de MongoDB 

🟢En cas d'utilisation en local

-Télécharge et installe MongoDB depuis mongodb.com.
-Crée un dossier pour stocker ta base de données MongoDB (par exemple : data).
-Démarre MongoDB en indiquant le chemin vers le dossier créé :
-->mongod.exe --dbpath .\data

🟢En cas d'utilisation de base de donnée distante:

MONGO_URI=mongodb+srv://ensimUser:UElxrJiKHF8ipBCn@rhums. aeoo1.mongodb.net /rhums

⚙️ Variables d'environnement (.env)

-Crée un fichier .env à la racine du projet et ajoute les variables suivantes :
MONGO_URI=mongodb+srv://ensimUser:UElxrJiKHF8ipBCn@rhums. aeoo1.mongodb.net /rhums

JWT_SECRET=SecretKey

PORT=3003

🚦 Lancement du serveur Node.js

Pour démarrer ton serveur backend, utilise la commande suivante dans ton terminal :
-->node ./src/serveur.js
Ton serveur devrait alors être accessible sur :
http://localhost:3003

📦 À quoi servent les dépendances principales utilisées ?

express :
Framework Node.js pour créer ton serveur HTTP facilement, gérer les routes et les requêtes.

mongoose :
Bibliothèque pour connecter Node.js avec MongoDB, définir des modèles de données (schemas) et simplifier les opérations CRUD.

jsonwebtoken (JWT) :
Paquet qui permet de créer et gérer les JSON Web Tokens (JWT) pour authentifier et sécuriser les API.

bcrypt :
Pour hasher (chiffrer) de manière sécurisée les mots de passe avant de les sauvegarder dans la base MongoDB.

dotenv :
Pour gérer facilement des variables d'environnement (comme des clés secrètes, les informations sensibles, les identifiants de connexion à MongoDB, etc.).

mongoose :
Outil qui permet d’interagir simplement avec MongoDB, notamment à travers les schémas et les modèles.

✅ Fonctionnalités Implémentées

🟢 Partie 1 : Mise en place de l’environnement

✔ Installation et configuration de MongoDB

✔ Lancement du serveur MongoDB

🟢 Partie 2 : Développement MVC et Authentification

✔ Adoption de l’architecture MVC (Modèle-Vue-Contrôleur) 

✔ Création du modèle User et de son contrôleur correspondant 

✔ Ajout des routes d'inscription et de connexion (userRoutes.js) 

✔ Implémentation de l'authentification des utilisateurs avec JWT (middlware.js) 

✔ Développement de la gestion des rhums (rhumController.js)

✔ Création de nouveaux modèles (Recipe.js, Ingredient.js) 

✔ Développement des contrôleurs pour ces modèles 

✔ Ajout des routes API associées à ces nouveaux modèles 

✔ création et Améliorations modifications au niveau du serveur.js

🟢 Partie 3 :tests

Tests complets des routes et fonctionnalités via Postman incluant :

    ✔Inscription et connexion d'utilisateur (register/login)

    ✔Ajout, recherche et pagination des ingrédients

    ✔Ajout, recherche et pagination des rhums (par nom, type ou région)

    ✔Création de recettes publiques et privées

    ✔Pagination et consultation des recettes

    ✔Modification des recettes existantes
