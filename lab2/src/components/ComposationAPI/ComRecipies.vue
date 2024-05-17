<template>
  <div>
    <h1>Recipes from Composition API</h1>
    <div v-if="recipes.length > 0">
      <h3
        v-for="recipe in recipes"
        :key="recipe.id"
        @click="selectRecipe(recipe.id)">
        {{ recipe.name }}
      </h3>
    </div>
    <hr />
    <div v-if="selectedRecipe">
      <h2>{{ selectedRecipe.name }}</h2>
      <p v-if="selectedRecipe.ingredients">
        Ingredients: {{ selectedRecipe.ingredients.join(", ") }}
      </p>
      <p v-if="selectedRecipe.instructions">
        Instructions: {{ selectedRecipe.instructions.join(", ") }}
      </p>
      <p v-if="selectedRecipe.rating">Rating: {{ selectedRecipe.rating }}</p>
      <p v-if="selectedRecipe.image">Image URL: {{ selectedRecipe.image }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComRecipies",
  props: {
    recipes: {
      type: Array,
      required: true,
    },
    selectedRecipe: {
      type: Object,
      default: null,
    },
  },
  methods: {
    selectRecipe(id) {
      this.$emit("select-recipe", id);
    },
  },
};
</script>

<style scoped></style>
