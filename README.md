# ──────── ✦ CinéVision ✦ ────────

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![OMDB](https://img.shields.io/badge/API-OMDB-yellow?style=for-the-badge&logo=imdb&logoColor=white)

> Site de cinéma en HTML/CSS/JS

Projet réalisé dans le cadre de la première année à SUPINFO - HTML/CSS/JS uniquement.

[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=for-the-badge&logo=github)](https://github.com/Antoo42/cinevision)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge)
![School](https://img.shields.io/badge/SUPINFO-PGE1_Project-blue?style=for-the-badge)

✦ ━━━━━━━━━━━━━━━ ✦ ━━━━━━━━━━━━━━━ ✦

## À propos du projet
Le projet consiste à développer un site web en HTML/CSS/JS permettant d'accéder aux films présents depuis l'API d'OpenMovieDataBase.

## Lien de l'API
> Lien de l'API d'OMDB: https://www.omdbapi.com/

### Objectifs pédagogiques
- Concevoir un site web réactif avec JavaScript
- Utiliser Git pour la gestion du projet
- Optimiser la qualité et la clarté du code

✦ ━━━━━━━━━━━━━━━ ✦ ━━━━━━━━━━━━━━━ ✦

# Cahier des charges

## Modalités de Réalisation
- Travail **seul** ou en **binôme**
- Interdiction stricte d'utiliser des IA génératives

## Contexte du projet

### Mission
Un cinéma de village souhaite attirer une clientèle plus jeune en proposant une application web permettant de consulter les films disponibles via la base de données OMDb (The Open Movie Database).

### Source de données
- API OMDb nécessitant une clé API personnelle
- Base de données en anglais (utiliser les titres originaux)

## Livrables obligatoires

### Structure du site web
Trois pages HTML minimum :
- **index.html** : Page d'accueil affichant les films tendances
- **search.html** : Page de recherche de films
- **movie.html** : Page détaillée d'un film

## Spécifications techniques
- Languages : HTML, CSS, JavaScript

## Fonctionnalités par page

### Page index.html
- Afficher au minimum 3 films considérés en tendance
- Pour chaque film afficher :
    - Le poster
    - Le titre
    - Un lien vers la page de détails (movie.html)
    - **Bonus** : Un court résumé
- Bouton de chargement pour afficher plus de films de 2024

### Page search.html
- Barre de recherche fonctionnelle
- Affichage des résultats en temps réel
- **Contrainte stricte** : Aucun rechargement de page pendant ou après la recherche
- Bouton pour charger plus de résultats
- Pour chaque résultat afficher :
    - Le poster
    - Le titre
    - Un lien vers la page de détails (movie.html)

### Page movie.html
- Affichage complet des informations du film :
    - Titre
    - Poster
    - Résumé détaillé
    - Genre
    - Acteurs
- **Bonus** :
    - Notes obtenues
    - Date de sortie DVD (format français : jj/mm/aaaa)

## Gestion Git

### Organisation du dépôt GitHub
- Bonne gestion du dépôt distant
- Organisation claire des branches
- Messages de commit significatifs et bien nommés
- Lien du dépôt à renseigner dans le README.md

✦ ━━━━━━━━━━━━━━━ ✦ ━━━━━━━━━━━━━━━ ✦

## Librairies utilisés
- jQuery ([jquery.com](https://jquery.com/))
- Axios ([axios-http.com](https://axios-http.com/fr/))
- Swiper ([swiperjs.com](https://swiperjs.com/swiper-api))

✦ ━━━━━━━━━━━━━━━ ✦ ━━━━━━━━━━━━━━━ ✦


## Bonus réalisés
- Dark/Light mode
- Slogan dynamique sur la page d'acceuil
- Affichage des films tendances dans un carroussel avec l'API Swiper
- Petit résumé du film sur la page d'accueil
- Les notes obtenues par le film
- La date de sortie en DVD
- Token de l'API configurable dans le fichier config.json

✦ ━━━━━━━━━━━━━━━ ✦ ━━━━━━━━━━━━━━━ ✦

## Contributeurs
- **Antonin MAUGIN** [![GitHub](https://img.shields.io/badge/GitHub-Antoo42-181717?style=flat&logo=github)](https://github.com/Antoo42)

# ──────── ✦ CinéVision ✦ ────────