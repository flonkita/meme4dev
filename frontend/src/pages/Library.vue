<template>
    <div class="library">
      <div class="welcome-section">
        <div class="welcome-message">
          <h2>Bibliothèque de Memes</h2>
          <p>
            Découvrez les mèmes les plus populaires créés par notre communauté. Ajoutez les vôtres et partagez-les avec vos amis !
          </p>
        </div>
      </div>
      <div class="meme-container">
        <div class="row">
          <MemeCard v-for="meme in displayedMemes" :key="meme.id" :meme="meme" class="col-md-4 col-sm-6 col-12 mb-4 d-flex justify-content-center" />
          <button @click="deleteMeme(meme.id)">Supprimer</button>
        </div>
        <div class="d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-primary load-more me-2" @click="loadMoreMemes">Voir plus</button>
          <button class="btn btn-secondary back-to-top" @click="scrollToTop">⬆ Remonter</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MemeCard from '../components/MemeCard.vue';
  
  export default {
    name: 'Library',
    components: {
      MemeCard
    },
    data() {
      return {
        memes: [
          { id: 1, title: 'Meme 1', description: 'Description du Meme 1', image: 'https://via.placeholder.com/150' },
          { id: 2, title: 'Meme 2', description: 'Description du Meme 2', image: 'https://via.placeholder.com/150' },
          { id: 3, title: 'Meme 3', description: 'Description du Meme 3', image: 'https://via.placeholder.com/150' },
          { id: 4, title: 'Meme 4', description: 'Description du Meme 4', image: 'https://via.placeholder.com/150' },
          { id: 5, title: 'Meme 5', description: 'Description du Meme 5', image: 'https://via.placeholder.com/150' },
          { id: 6, title: 'Meme 6', description: 'Description du Meme 6', image: 'https://via.placeholder.com/150' },
          { id: 7, title: 'Meme 7', description: 'Description du Meme 7', image: 'https://via.placeholder.com/150' },
          { id: 8, title: 'Meme 8', description: 'Description du Meme 8', image: 'https://via.placeholder.com/150' },
          { id: 9, title: 'Meme 9', description: 'Description du Meme 9', image: 'https://via.placeholder.com/150' },
          { id: 10, title: 'Meme 10', description: 'Description du Meme 10', image: 'https://via.placeholder.com/150' },
          { id: 11, title: 'Meme 11', description: 'Description du Meme 11', image: 'https://via.placeholder.com/150' },
          { id: 12, title: 'Meme 12', description: 'Description du Meme 12', image: 'https://via.placeholder.com/150' },
          { id: 13, title: 'Meme 13', description: 'Description du Meme 13', image: 'https://via.placeholder.com/150' },
          { id: 14, title: 'Meme 14', description: 'Description du Meme 14', image: 'https://via.placeholder.com/150' },
          { id: 15, title: 'Meme 15', description: 'Description du Meme 15', image: 'https://via.placeholder.com/150' },
          { id: 16, title: 'Meme 16', description: 'Description du Meme 16', image: 'https://via.placeholder.com/150' },
          { id: 17, title: 'Meme 17', description: 'Description du Meme 17', image: 'https://via.placeholder.com/150' },
          { id: 18, title: 'Meme 18', description: 'Description du Meme 18', image: 'https://via.placeholder.com/150' },
          { id: 19, title: 'Meme 19', description: 'Description du Meme 19', image: 'https://via.placeholder.com/150' },
          { id: 20, title: 'Meme 20', description: 'Description du Meme 20', image: 'https://via.placeholder.com/150' },
          { id: 21, title: 'Meme 21', description: 'Description du Meme 21', image: 'https://via.placeholder.com/150' },
          { id: 22, title: 'Meme 22', description: 'Description du Meme 22', image: 'https://via.placeholder.com/150' },
          { id: 23, title: 'Meme 23', description: 'Description du Meme 23', image: 'https://via.placeholder.com/150' },
          { id: 24, title: 'Meme 24', description: 'Description du Meme 24', image: 'https://via.placeholder.com/150' }
        ],
        displayedMemes: [],
        memesPerPage: 12,
        currentPage: 1
      };
    },
    created() {
      this.loadMoreMemes();
    },
    methods: {
      loadMoreMemes() {
        const start = (this.currentPage - 1) * this.memesPerPage;
        const end = this.currentPage * this.memesPerPage;
        this.displayedMemes = this.displayedMemes.concat(this.memes.slice(start, end));
        this.currentPage++;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      },
      deleteMeme(id) {
      axios
        .delete(`http://localhost:3000/memes/${id}`) // Utilisez l'URL de votre API
        .then(() => {
          // Mettre à jour la liste des memes après la suppression
          this.memes = this.memes.filter(meme => meme.id !== id);
        })
        .catch((error) => {
          console.error("There was an error deleting the meme:", error);
        });
    },
    }
  }
  </script>
  
  <style scoped>
  .library {
    padding: 2rem;
    text-align: center;
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
  
  .meme-container {
    margin-top: 2rem;
  }
  
  .load-more {
    background-color: #f989a8;
    border-color: #f989a8;
    color: #fff;
  }
  
  .load-more:hover {
    background-color: #e07b9b;
    border-color: #e07b9b;
  }
  
  .back-to-top {
    background-color: #282929;
    border-color: #282929;
    color: #fff;
  }
  
  .back-to-top:hover {
    background-color: #3a3a3a;
    border-color: #3a3a3a;
  }
  
  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .col-md-4,
  .col-sm-6,
  .col-12 {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  </style>
  