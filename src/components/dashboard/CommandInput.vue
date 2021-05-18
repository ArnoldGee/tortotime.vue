<template>
  <div class="py-4">
    <input
      class="
        w-full
        py-3
        px-2
        bg-transparent
        border-b-2 border-stone
        focus:border-black
        placeholder-black-2
        outline-none
      "
      type="text"
      placeholder="Type ? for help"
    />
  </div>
</template>
<script>
import { Vue } from "vue-class-component";

export default class CommandInput extends Vue {}
</script>
