<template>
  <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/BOT.ai.png" alt="Meme4Dev Logo" class="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/create">Créer</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/library">Bibliothèque</router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Rechercher</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      const navbarCollapse = document.getElementById('navbarNav');
      if (window.innerWidth >= 992 && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    },
  },
}
</script>

<style scoped>
.custom-navbar {
  background-color: #e4e2dd;
  position: relative;
  padding-bottom: 3rem; /* Augmentez l'espace en bas */
}

.navbar-brand .logo {
  height: 70px;
  position: absolute;
  bottom: -35px; /* Descendre encore le logo */
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  background-color: #e4e2dd; /* Assurez-vous que la couleur de fond du logo correspond à celle de la barre de navigation */
}

/* Media query pour les écrans larges */
@media (min-width: 992px) {
  .custom-navbar {
    padding-bottom: 0; /* Remettre le padding à 0 pour les grands écrans */
    height: 100px; /* Ajustez la hauteur de la navbar si nécessaire */
    display: flex;
    align-items: center; /* Centrer verticalement le contenu */
  }

  .navbar-brand .logo {
    height: 70px; /* Ajuster la taille du logo */
    position: absolute;
    bottom: -35px; /* Descendre encore le logo */
    left: 50%;
    transform: translateX(-50%);
    margin: 0; /* Centrer le logo horizontalement */
  }
}

.nav-link {
  color: #282929 !important;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  color: #f989a8 !important;
}

.navbar-toggler {
  border-color: #282929;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(40, 41, 41, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
