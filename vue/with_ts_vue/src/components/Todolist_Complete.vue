<template>
  <div>완료 안한거</div>
  <div>
    <a>날짜 : {{ startDate }}</a>
    <a>할일 : {{ todoText }}</a>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  props: {
    startDate: String,
    todoText: String,
  },
})
export default class Todolist_Complete extends Vue {
  startDate!: string;
  todoText!: string;
}
</script>
