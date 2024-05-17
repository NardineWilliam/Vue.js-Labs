<template>
  <NavBar v-if="!$route.meta.hideNavbar" />
  <div class="container">
    <router-view></router-view>
    <hr />
    <!-- <MainFile/> -->
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import MainFile from './components/ComposationAPI/MainFile.vue';

export default {
  name: "App",
  components: {
    NavBar,
    // MainFile
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#app {
  height: 100vh;
}
</style>
