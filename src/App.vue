<template>
  <div class="absolute inset-0 flex flex-col">
    <div class="flex-none">
      <Header></Header>
    </div>
    <Dashboard></Dashboard>
  </div>
  <!--<img alt="Vue logo" src="./assets/logo.png" />-->
  <!--<HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />-->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import HelloWorld from "./components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Dashboard from "@/components/dashboard/Dashboard.vue";

@Options({
  components: {
    Dashboard,
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
