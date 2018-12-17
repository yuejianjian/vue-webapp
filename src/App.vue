<template>
  <div id="app">
    <v-header></v-header>
    <v-tabar></v-tabar>
    <router-view/>
  </div>
</template>

<script>
import tabar from "@/components/tabar";
import header from "@/components/header";
export default {
  name: 'App',
  components: {
    "v-tabar": tabar,
    "v-header": header,
  },
  data() {
    return {};
  },
}
</script>

<style>
html{
  font-size: 4vw;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
