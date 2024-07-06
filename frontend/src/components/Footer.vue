<template>
    <footer class="custom-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>À propos de Meme4Dev</h5>
            <p>Créé pour les développeurs, par les développeurs. Amusez-vous en créant des mèmes uniques pour la communauté dev.</p>
          </div>
          <div class="col-md-4">
            <h5>Liens utiles</h5>
            <ul class="list-unstyled">
              <li><router-link to="/">Accueil</router-link></li>
              <li><router-link to="/create">Créer un meme</router-link></li>
              <li><router-link to="/library">Bibliothèque de memes</router-link></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contactez-nous</h5>
            <p>Email: contact@meme4dev.com</p>
          </div>
        </div>
        <div class="text-center mt-4">
          <p>&copy; 2024 Meme4Dev. Par Flo & Olivier.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .custom-footer {
    background-color: #e4e2dd;
    color: #282929;
    padding: 2rem 0;
  }
  
  .custom-footer h5 {
    color: #282929;
    margin-bottom: 1rem;
  }
  
  .custom-footer p, .custom-footer ul, .custom-footer li {
    color: #282929;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .custom-footer a {
    color: #282929;
    text-decoration: none;
  }
  
  .custom-footer a:hover {
    color: #f989a8;
  }
  
  .custom-footer .container {
    max-width: 960px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    .custom-footer .row > div {
      margin-bottom: 1.5rem;
    }
  }
  </style>
  