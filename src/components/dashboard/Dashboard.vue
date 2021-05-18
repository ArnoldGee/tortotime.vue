<template>
  <div class="flex-1 flex flex-col max-h-96">
    <div class="flex-1">
      <NarrowMaxWidth> Hello 1 </NarrowMaxWidth>
    </div>
    <div class="flex-none">
      <NarrowMaxWidth>
        <CommandInput></CommandInput>
      </NarrowMaxWidth>
    </div>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
import NarrowMaxWidth from "@/components/common/NarrowMaxWidth";
import CommandInput from "@/components/dashboard/CommandInput";

@Options({
  components: { NarrowMaxWidth, CommandInput },
})
export default class Dashboard extends Vue {}
</script>
