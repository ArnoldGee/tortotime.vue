<template>
  <Header></Header>

  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import HelloWorld from "./components/HelloWorld.vue";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
    //HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @apply bg-offwhite text-black;
}

.h1 {
  @apply text-3xl font-bold;
}
.h4 {
  @apply text-xs uppercase;
}
</style>
