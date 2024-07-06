<template>
    <div class="create-meme">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="info-section">
              <h2>Créer vos mèmes</h2>
              <p class="info-text">
                Bienvenue sur la page de création de mèmes! Ici, vous pouvez créer vos propres mèmes en téléchargeant une image de modèle et en y ajoutant du texte personnalisé. Utilisez les contrôles ci-dessous pour commencer.
              </p>
            </div>
          </div>
          <div class="col-md-8 col-lg-6 meme-preview-container">
            <div class="meme-preview">
              <img :src="selectedImage" alt="Meme Preview" class="img-fluid" v-if="selectedImage" />
              <div class="text-overlay" v-for="(text, index) in texts" :key="index" :style="{ top: text.top, left: text.left, color: text.color }">{{ text.content }}</div>
            </div>
          </div>
          <div class="col-md-8 col-lg-6 controls">
            <div class="upload-section">
              <button class="btn btn-primary" @click="uploadTemplate">Upload Template</button>
              <input type="file" @change="onFileChange" style="display: none;" ref="fileInput" />
            </div>
            <div class="text-controls">
              <div v-for="(text, index) in texts" :key="index" class="text-control">
                <input type="text" v-model="text.content" :placeholder="'Texte #' + (index + 1)" class="form-control" />
                <input type="color" v-model="text.color" class="form-control color-picker" />
                <button class="btn btn-danger" @click="removeText(index)">Remove</button>
              </div>
              <button class="btn btn-secondary" @click="addText">Ajouter le texte</button>
            </div>
            <div class="action-buttons">
              <button class="btn btn-success" @click="generateMeme">Voir le meme</button>
              <button class="btn btn-warning" @click="resetForm">Effacer</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="previewModal" tabindex="-1" aria-labelledby="previewModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="previewModalLabel">Meme Preview</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="meme-preview">
                <img :src="selectedImage" alt="Meme Preview" class="img-fluid" v-if="selectedImage" />
                <div class="text-overlay" v-for="(text, index) in texts" :key="index" :style="{ top: text.top, left: text.left, color: text.color }">{{ text.content }}</div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit</button>
              <button type="button" class="btn btn-primary">Get Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedImage: '',
        texts: [
          { content: '', top: '10%', left: '50%', color: '#282929' },
          { content: '', top: '90%', left: '50%', color: '#282929' },
        ],
      };
    },
    methods: {
      uploadTemplate() {
        this.$refs.fileInput.click();
      },
      onFileChange(event) {
        const file = event.target.files[0];
        this.selectedImage = URL.createObjectURL(file);
      },
      addText() {
        this.texts.push({ content: '', top: '50%', left: '50%', color: '#282929' });
      },
      removeText(index) {
        this.texts.splice(index, 1);
      },
      generateMeme() {
        const previewModal = new bootstrap.Modal(document.getElementById('previewModal'));
        previewModal.show();
      },
      resetForm() {
        this.selectedImage = '';
        this.texts = [
          { content: '', top: '10%', left: '50%', color: '#282929' },
          { content: '', top: '90%', left: '50%', color: '#282929' },
        ];
      },
    },
  };
  </script>
  
  <style scoped>
  .create-meme {
    padding: 4rem 2rem;
    background-color: #f4f4f9;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .meme-preview-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  .meme-preview {
    position: relative;
    border: 2px solid #282929;
    padding: 1rem;
    background-color: #ffffff;
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 400px;
    overflow: hidden;
  }
  
  .meme-preview img {
    width: 100%;
    height: auto;
  }
  
  .text-overlay {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
  
  .controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin-top: 2rem;
  }
  
  .upload-section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .text-controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .text-control {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  
  .color-picker {
    width: 50px;
    padding: 0;
  }
  
  .action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
  
  h2 {
    font-family: 'Arial', sans-serif;
    color: #282929;
    text-align: center;
  }
  
  .info-section {
    background-color: #e4e2dd;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .info-text {
    font-family: 'Arial', sans-serif;
    color: #282929;
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  
  .btn-primary {
    background-color: #f989a8;
    border-color: #f989a8;
  }
  
  .btn-primary:hover {
    background-color: #e07b9b;
    border-color: #e07b9b;
  }
  
  .btn-secondary {
    background-color: #7f6569;
    border-color: #7f6569;
  }
  
  .btn-secondary:hover {
    background-color: #6e565d;
    border-color: #6e565d;
  }
  
  .btn-success {
    background-color: #4caf50;
    border-color: #4caf50;
  }
  
  .btn-success:hover {
    background-color: #45a049;
    border-color: #45a049;
  }
  
  .btn-danger {
    background-color: #f44336;
    border-color: #f44336;
  }
  
  .btn-danger:hover {
    background-color: #e31b0c;
    border-color: #e31b0c;
  }
  
  .btn-warning {
    background-color: #ff9800;
    border-color: #ff9800;
  }
  
  .btn-warning:hover {
    background-color: #fb8c00;
    border-color: #fb8c00;
  }
  </style>
  