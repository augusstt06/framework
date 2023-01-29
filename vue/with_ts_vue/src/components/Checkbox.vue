<template>
  <div>
    <input type="checkbox" @click="checkHandler" />
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
  methods: {},
})
export default class Checkbox extends Vue {
  complete?: boolean;
  checkHandler!: () => void;
}
</script>
