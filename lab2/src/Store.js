import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      recipes: [],
    };
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe);
    },
    UPDATE_RECIPE(state, updatedRecipe) {
      const index = state.recipes.findIndex(
        (recipe) => recipe.id === updatedRecipe.id
      );
      if (index !== -1) {
        state.recipes.splice(index, 1, updatedRecipe);
      }
    },
    DELETE_RECIPE(state, recipeId) {
      state.recipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
    },
  },
  actions: {
    getAllRecipes({ commit }) {
      axios
        .get("http://localhost:2000/recipes")
        .then((res) => commit("SET_RECIPES", res.data))
        .catch((err) => console.error(err));
    },
    getRecipeById({ state }, recipeId) {
      return state.recipes.find((recipe) => recipe.id === recipeId);
    },
    createRecipe({ commit }, newRecipe) {
      axios
        .post("http://localhost:2000/recipes", newRecipe)
        .then((res) => commit("ADD_RECIPE", res.data))
        .catch((err) => console.error(err));
    },
    updateRecipe({ commit }, updatedRecipe) {
      axios
        .put(`http://localhost:2000/recipes/${updatedRecipe.id}`, updatedRecipe)
        .then(() => commit("UPDATE_RECIPE", updatedRecipe))
        .catch((err) => console.error(err));
    },
    deleteRecipe({ commit }, recipeId) {
      axios
        .delete(`http://localhost:2000/recipes/${recipeId}`)
        .then(() => commit("DELETE_RECIPE", recipeId))
        .catch((err) => console.error(err));
    },
  },
  getters: {
    getRecipes(state) {
      return state.recipes;
    },
  },
});

export default store;
