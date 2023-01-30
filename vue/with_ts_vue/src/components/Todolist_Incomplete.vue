<template>
  <div>
    <a>날짜 : {{ startDate }}</a>
    <a>{{ todoText }}</a>
    <a>{{ complete }}</a>
    <Checkbox :complete="complete" :checkHandler="checkHandler" />
    <button @click="deleteTodo">삭제</button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Checkbox from "./Checkbox.vue";
// 체크를 해도 완료로 안넘어가는 문제
// Vue Emit을 통하여 해보기
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
      this.rerender = "강제 리렌더 완료";
      this.$emit("check", this.rerender);
      this.$emit("complete", this.complete);
    },
    deleteTodo(isComplete: boolean) {
      const toDelete = {
        date: this.startDate,
        text: this.todoText,
      };
      if (isComplete) {
        this.completeTodo.forEach((data: object) =>
          JSON.stringify(data) === JSON.stringify(toDelete)
            ? this.incompleteTodo.delete(data)
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
  rerender!: string;
  completeTodo?: Set<any>;
  incompleteTodo?: Set<any>;
  complete!: boolean;
  checkHandler!: () => void;
  deleteTodo!: () => void;
}
</script>
