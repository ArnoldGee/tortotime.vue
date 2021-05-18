<template>
  <div class="px-4">
    <div class="max-w-screen-md mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class MaxWidth extends Vue {}
</script>

<style scoped></style>
