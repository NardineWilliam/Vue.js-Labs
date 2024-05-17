<template>
  <div>
    <h1>Recipes Page</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in prds" :key="p.id">
          <td>{{ p.id }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.rating }}</td>
          <td>
            <button class="btn btn-dark" @click="HandleDelete(p.id)">
              del
            </button>
          </td>
          <td>
            <router-link class="btn btn-dark" :to="`/recipes/${p.id}`"
              >see more..</router-link
            >
          </td>
          <td>
            <router-link class="btn btn-dark" :to="`/add/${p.id}`"
              >Edit..</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RecipesPage",
  data() {
    return {
      prds: [],
    };
  },
  methods: {
    GetAllPrds() {
      axios
        .get(" http://localhost:2000/recipes")
        .then((res) => {
          console.log(res.data);
          this.prds = res.data;
          console.log(this.prds);
        })
        .catch((err) => console.log(err));
    },
    HandleDelete(id) {
      axios
        .delete(` http://localhost:2000/recipes/${id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      this.GetAllPrds();
    },
  },
  created() {
    this.GetAllPrds();
  },
};
</script>

<style scoped></style>
