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
    };
  },
  methods: {},
})
export default class App extends Vue {
  // !는 해당 변수에 값이 무조건 할당되어있다는 뜻
  todoText!: string;
  startDate!: string;
}
</script>

<style></style>
