<template>
  <div id="app">
    <!-- <HelloWorld /> -->
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './views/HelloWorld.vue';

export default {
  name: 'App'
  // components: {
  //   HelloWorld
  // }
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0px;
}

div {
  box-sizing: border-box;
}
</style>
