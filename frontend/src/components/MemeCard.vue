<template>
    <div class="card m-3">
      <img :src="meme.image" class="card-img-top" alt="Meme Image">
      <div class="card-body">
        <h5 class="card-title">{{ meme.title }}</h5>
        <p class="card-text">{{ meme.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MemeCard',
    props: {
      meme: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    width: 18rem;
  }
  </style>
  
  