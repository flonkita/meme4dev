<template>
    <div class="home">
      <div class="welcome-section">
        <div class="welcome-message">
          <h2>Bienvenue sur Meme4Dev!</h2>
          <p>
            Ici, vous pouvez créer et partager des mèmes <span class="highlight">uniques</span> pour la communauté des développeurs.
            Utilisez notre générateur pour ajouter des <span class="highlight">textes</span>, des <span class="highlight">images</span> et bien plus encore.
            Explorez notre <span class="highlight">bibliothèque</span> pour trouver de l'inspiration et voir ce que les autres ont créé.
          </p>
          <router-link to="/create" class="btn btn-primary create-button">Créer un Mème</router-link>
        </div>
        <div class="carousel-container">
          <div id="memeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/fry-password-1.jpg" class="d-block w-100" alt="Meme 1">
              </div>
              <div class="carousel-item">
                <img src="@/assets/fry-password-1.jpg" class="d-block w-100" alt="Meme 2">
              </div>
              <div class="carousel-item">
                <img src="@/assets/fry-password-1.jpg" class="d-block w-100" alt="Meme 3">
              </div>
              <div class="carousel-item">
                <img src="@/assets/fry-password-1.jpg" class="d-block w-100" alt="Meme 4">
              </div>
              <div class="carousel-item">
                <img src="@/assets/fry-password-1.jpg" class="d-block w-100" alt="Meme 5">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#memeCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#memeCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  
  <style scoped>
.home {
  padding: 2rem;
  text-align: center;
}

.logo-container {
  margin-bottom: 2rem;
}

.welcome-logo {
  height: 100px;
}

.welcome-section {
  background-color: #e4e2dd;
  background-size: cover;
  background-position: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  margin-top: 2rem; /* Ajouter de la marge en haut */
}

.welcome-message {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.welcome-message h2 {
  font-family: 'Arial', sans-serif;
  color: #282929;
}

.welcome-message p {
  font-family: 'Arial', sans-serif;
  color: #282929;
  font-size: 1.2rem;
}

.welcome-message .highlight {
  font-weight: bold;
  color: #e07b9b;
}

.create-button {
  background-color: #f989a8;
  border-color: #f989a8;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
}

.create-button:hover {
  background-color: #e07b9b;
  border-color: #e07b9b;
}

.carousel-container {
  margin-top: 2rem;
}

.carousel-inner {
  max-height: 400px;
}

.carousel-inner img {
  width: auto;
  max-width: 100%;
  height: 100%;
  object-fit: contain; /* Assure que l'image est entièrement visible */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>

  