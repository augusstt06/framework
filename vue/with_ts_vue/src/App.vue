<template>
  <div>Framework practice</div>
  <div>
    <DatePicker selected="startDate" v-model="startDate" minDate="date" />
  </div>
  <input placeholder="할일을 입력하세요" v-model="todoText" />
  <button @click="registerTodo">q버튼</button>
  <a>{{ todoText }}</a>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// incompleteArr은 변수로 넣기
@Options({
  components: { DatePicker },
  data() {
    return {
      date: new Date(),
      startDate: String(new Date()),
      todoText: "" as string,
      rerender: false as boolean,
      completeTodo: new Set(),
      completeTodo_arr: [],
      incompleteTodo: new Set(),
      incompleteTodo_arr: [],
    };
  },
  methods: {
    registerTodo() {
      const newTodo = {
        date: this.startDate,
        text: this.todoText,
      };
      this.incompleteTodo.add(newTodo);
    },
  },
})
export default class App extends Vue {
  // !는 해당 변수에 값이 무조건 할당되어있다는 뜻
  todoText!: string;
  startDate!: string;
  rerender!: boolean;
  completeTodo?: Set<any>;
  registerTodo!: () => void;
}
</script>

<style></style>
