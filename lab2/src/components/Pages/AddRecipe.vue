<template>
  <div class="container">
    <h1 class="mt-5 mb-4">{{ id ? "Edit Recipe" : "Add Recipe" }}</h1>
    <form @submit.prevent="id ? handlePutReq() : handlePostReq()">
      <div class="mb-3">
        <label for="name" class="form-label">Recipe Name</label>
        <input type="text" id="name" v-model.trim="name" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingredients</label>
        <textarea
          id="ingredients"
          v-model.trim="ingredients"
          @input="formatIngredients"
          class="form-control"
          rows="5"></textarea>
      </div>
      <div class="mb-3">
        <label for="instructions" class="form-label">Instructions</label>
        <textarea
          id="instructions"
          v-model.trim="instructions"
          @input="formatInstructions"
          class="form-control"
          rows="5"></textarea>
      </div>
      <div class="mb-3">
        <label for="rating" class="form-label">Rating</label>
        <input
          type="number"
          id="rating"
          v-model.number="rating"
          class="form-control" />
      </div>
      <div class="mb-3">
        <label for="image" class="form-label">Image URL</label>
        <input
          type="text"
          id="image"
          v-model.trim="image"
          class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddRecipe",
  data() {
    return {
      id: "",
      name: "",
      ingredients: [],
      instructions: [],
      rating: 0,
      image: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.getPrdById();
    }
  },
  methods: {
    handlePostReq() {
      this.ingredients = this.ingredients
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      this.instructions = this.instructions
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

      axios
        .post("http://localhost:2000/recipes", {
          name: this.name,
          ingredients: this.ingredients,
          instructions: this.instructions,
          rating: this.rating,
          image: this.image,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/recipes");
        })
        .catch((err) => console.log(err));
    },
    getPrdById() {
      axios.get(`http://localhost:2000/recipes/${this.id}`).then((p) => {
        this.name = p.data.name;
        this.ingredients = p.data.ingredients;
        this.instructions = p.data.instructions;
        this.rating = p.data.rating;
        this.image = p.data.image;
      });
    },
    handlePutReq() {
      axios
        .put(`http://localhost:2000/recipes/${this.id}`, {
          name: this.name,
          ingredients: this.ingredients,
          instructions: this.instructions,
          rating: this.rating,
          image: this.image,
        })
        .then((res) => {
          console.log(res);
          this.$router.push("/recipes");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
