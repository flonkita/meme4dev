import { createStore } from "vuex";

export default createStore({
  state: {
    authenticated: false,
  },
  mutations: {
    authenticate(state) {
      state.authenticated = true;
    },
  },
  actions: {
    async login({ commit }, password) {
      const response = await fetch("http://localhost:3000/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (data.success) {
        commit("authenticate");
      }
      return data;
    },
  },
});
