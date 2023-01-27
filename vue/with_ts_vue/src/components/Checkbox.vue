<template>
  <div>
    <!-- <input
      type="checkbox"
      v-model="agreement"
      true-value="yes"
      false-value="no"
    /> -->
    <input type="checkbox" />
    <button @click="checkHandler">씨발련아</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    complete: Boolean,
    checkHandler: Function,
  },
  methods: {
    // checkHandler() {
    //   console.log(this.complete);
    //   this.complete = !this.complete;
    // },
  },
})
export default class Checkbox extends Vue {
  complete?: boolean;
  checkHandler!: () => void;
}
</script>
