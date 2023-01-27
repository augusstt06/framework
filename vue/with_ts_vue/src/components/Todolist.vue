<template>
  <div>
    <a>날짜 : {{ startDate }}</a>
    <a>{{ todoText }}</a>
    <Checkbox :complete="complete" />
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
export default class Todolist extends Vue {
  todoText!: string;
  startDate!: string;
  rerender!: boolean;
  completeTodo?: Set<any>;
  incompleteTodo?: Set<any>;
  complete!: boolean;
}
</script>
