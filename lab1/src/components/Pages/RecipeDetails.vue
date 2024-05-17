<template>
  <div class="container">
    <h1 class="mt-5 mb-4">Recipe Details</h1>
    <div class="card">
      <img :src="prd.image" class="card-img-top" alt="Recipe Image" />
      <div class="card-body">
        <h2 class="card-title">Name</h2>
        <h3>{{ prd.name }}</h3>
      </div>
    </div>
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="card-title">Ingredients</h2>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(ingredient, index) in prd.ingredients"
            :key="index">
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
    <div class="card mt-4">
      <div class="card-body">
        <h2 class="card-title">Instructions</h2>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(instruction, index) in prd.instructions"
            :key="index">
            {{ instruction }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import GetProd from "../../../public/Mixins/GetProd.js";

export default {
  name: "RecipesDetails",
  mixins: [GetProd],
  data() {
    return {
      id: "",
      prd: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.GetPrdById(this.id)
      .then((data) => {
        this.prd = data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped></style>
