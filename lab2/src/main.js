import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./components/Pages/Home.vue";
import RecipesPage from "./components/Pages/RecipesPage.vue";
import RecipeDetails from "./components/Pages/RecipeDetails.vue";
import AddRecipe from "./components/Pages/AddRecipe.vue";
import ErrorPage from "./components/Pages/ErrorPage.vue";
import store from "./Store.js";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Recipes",
    component: RecipesPage,
  },
  {
    path: "/Recipes/:id",
    component: RecipeDetails,
  },
  {
    path: "/add",
    component: AddRecipe,
  },
  {
    path: "/add/:id",
    component: AddRecipe,
  },
  {
    path: "/:NotFound(.*)*",
    component: ErrorPage,
    meta: { hideNavbar: true },
  },
];

let router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(store).use(router).mount("#app");
