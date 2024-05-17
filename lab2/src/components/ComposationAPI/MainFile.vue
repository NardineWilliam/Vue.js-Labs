<template>
  <div>
    <h1>MainFile</h1>
    <ComRecipies
      :recipes="recipes"
      :selectedRecipe="selectedRecipe"
      @select-recipe="handleSelectRecipe" />
  </div>
</template>

<script>
import ComRecipies from "./ComRecipies.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MainFile",
  components: { ComRecipies },
  setup() {
    const store = useStore();
    const recipes = computed(() => store.getters.getRecipes);
    const selectedRecipe = ref(null);

    const handleSelectRecipe = async (recipeId) => {
      selectedRecipe.value = await store.dispatch("getRecipeById", recipeId);
    };

    return {
      recipes,
      selectedRecipe,
      handleSelectRecipe,
    };
  },
};
</script>

<style scoped></style>
