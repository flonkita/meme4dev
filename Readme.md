# Projet de Création de Memes : Memes4Dev

Ce projet est une application web pour la création et le partage de memes. Elle utilise Express.js pour le backend et Vue.js pour le frontend, offrant une expérience utilisateur fluide et réactive.

## Fonctionnalités

- **Création de Memes** : Les utilisateurs peuvent créer des memes en utilisant un éditeur simple, en ajoutant du texte sur des images prédéfinies.
- **Galerie de Memes** : Les memes créés par les utilisateurs sont affichés dans une galerie accessible à tous.
- **Authentification** : Les utilisateurs peuvent s'inscrire et se connecter pour sauvegarder leurs memes et les modifier ultérieurement.
- **Partage** : Les memes peuvent être partagés sur les réseaux sociaux ou par lien direct.

## Technologies Utilisées

- **Backend** : [Express.js](https://expressjs.com/), un framework pour applications web Node.js, qui gère les requêtes HTTP, l'authentification des utilisateurs, et la communication avec la base de données.
- **Frontend** : [Vue.js](https://vuejs.org/), un framework JavaScript progressif pour construire des interfaces utilisateur dynamiques. Vue.js permet une expérience utilisateur riche et interactive.
- **Base de Données** : [MongoDB](https://www.mongodb.com/), un système de gestion de base de données pour stocker les informations des utilisateurs et les données des memes.

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

### Cloner le dépôt
```bash
git clone https://github.com/votre-utilisateur/memes4dev.git
cd memes4dev 
```
## Backend

Naviguez dans le répertoire backend :
```bash
cd backend
```
Installez les dépendances :
```bash
npm install
```

## Configurez l'environnement du backend :
Créez un fichier .env dans le dossier backend et configurez vos variables d'environnement (par exemple, la chaîne de connexion à la base de données).

DB_CONNECTION_STRING=your-mongodb-connection-string

JWT_SECRET=your-jwt-secret

Lancez le serveur backend :

```bash
npm start
```
## Frontend

Dans un autre terminal, naviguez dans le répertoire frontend :
```bash
cd ../frontend
```
Installez les dépendances :
```bash
npm install
```
Lancez l'application frontend :
```bash
npm run serve
```
## Remerciments

Merci à mon partenaire dans le crime Olivier Loorius pour ce travail énorme sur la partie front de ce projet où on a pu se trouver et se complèter pour faire ce travail et à Thibaud D'Arros pour ce mini-projet !

Flo4Dev 🥲