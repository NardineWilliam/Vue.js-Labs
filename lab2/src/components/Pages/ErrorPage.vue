<template>
  <div>
    <h1 class="alert alert-danger">Oops....</h1>
    <button class="btn btn-dark w-100" @click="HandleBack()">
      Back To Home
    </button>
    <router-link class="btn btn-dark w-100 mt-3" to="/recipes"
      >Back To Recipes</router-link
    >
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    HandleBack() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
