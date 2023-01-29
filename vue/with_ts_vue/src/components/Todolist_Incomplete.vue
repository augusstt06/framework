<template>
  <div>
    <a>날짜 : {{ startDate }}</a>
    <a>{{ todoText }}</a>
    <a>{{ complete }}</a>
    <Checkbox :complete="complete" :checkHandler="checkHandler" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Checkbox from "./Checkbox.vue";

@Options({
  components: { Checkbox },
  props: {
    startDate: String,
    todoText: String,
    incompleteTodo: Set,
    completeTodo: Set,
    rerender: Boolean,
  },
  data() {
    return {
      complete: false,
    };
  },
  methods: {
    checkHandler() {
      this.complete = !this.complete;
    },
    deleteTodo(isComplete: boolean) {
      const toDelete = {
        date: this.startDate,
        text: this.todoText,
      };
      if (isComplete) {
        this.completeTodo.forEach((data: object) =>
          JSON.stringify(data) === JSON.stringify(toDelete)
            ? this.completeTodo.delete(data)
            : ""
        );
      } else if (!isComplete) {
        this.incompleteTodo.forEach((data: object) =>
          JSON.stringify(data) === JSON.stringify(toDelete)
            ? this.completeTodo.delete(data)
            : ""
        );
      }
    },
  },
})
export default class Todolist_Incomplete extends Vue {
  todoText!: string;
  startDate!: string;
  rerender!: boolean;
  completeTodo?: Set<any>;
  incompleteTodo?: Set<any>;
  complete!: boolean;
  checkHandler!: () => void;
}
</script>
