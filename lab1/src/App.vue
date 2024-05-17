<template>
  <NavBar v-if="!$route.meta.hideNavbar" />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  height: 100vh;
}
</style>
