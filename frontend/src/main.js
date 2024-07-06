import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import store from "./store";
import router from "./router";


createApp(App).use(store).use(router).mount('#app');
