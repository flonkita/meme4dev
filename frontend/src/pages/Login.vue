<template>
  <div class="login-container">
    <h1>meme4dev</h1>
    <p>le code magique pour ouvrir la porte des memes</p>
    <form @submit.prevent="handleLogin">
      <input
        type="password"
        v-model="password"
        placeholder="Entrez le mot de passe"
        required
      />
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error" class="error-message">Mot de passe incorrect</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      password: '',
      error: false,
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const result = await this.login(this.password);
      if (result.success) {
        this.$router.push('/');
      } else {
        this.error = true;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  margin-top: 1rem;
}
</style>
