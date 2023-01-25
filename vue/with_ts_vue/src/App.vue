<template>
  <div>Framework practice</div>
  <input placeholder="할일을 입력하세요" v-model="todoText" />
  <a>{{ todoText }}</a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { todolist } from "./type";

@Options({
  components: {},
  data() {
    return {
      startDate: String(new Date()),
      todoText: "" as string,
      rerender: false as boolean,
      completeTodo: new Set(),
      complete_arr: Array.from(this.completeTodo),
      incompleteTodo: new Set(),
      incomplete_arr: Array.from(this.incompleteTodo),
    };
  },
  methods: {
    registerTodo() {
      const newTodo = {
        date: this.startDate,
        text: this.todoText,
      };
    },
  },
})
export default class App extends Vue {
  // !는 해당 변수에 값이 무조건 할당되어있다는 뜻
  todoText!: string;
  startDate!: string;
  rerender!: boolean;
  completeTodo?: Set<any>;
}
</script>

<style></style>
