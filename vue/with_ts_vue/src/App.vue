<template>
  <div>Framework practice</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  data() {
    return {
      startDate: new Date(),
      todoText: "" as string,
      rerender: false as boolean,
      completeTodo: new Set(),
    };
  },
})
export default class App extends Vue {}
</script>

<style></style>
