<template>
  <div>Framework practice</div>
  <div>{{ rerender }}</div>
  <div>
    <DatePicker
      selected="startDate"
      v-model="startDate"
      :min-date="new Date()"
      style="width: 300px"
    />
  </div>
  <input placeholder="할일을 입력하세요" v-model="todoText" />
  <button @click="registerTodo">등록</button>

  <h3>완료 하지 않은 할일</h3>
  <div v-for="i in incompleteTodo_arr" v-bind:key="i.date">
    <Todolist_Incomplete
      @check="check_emit"
      :startDate="i.date"
      :todoText="i.text"
      :incompleteTodo="incompleteTodo"
      :completeTodo="completeTodo"
      :rerender="rerender"
    />
  </div>
  <h3>완료한 할일</h3>
  <div v-for="i in completeTodo_arr" v-bind:key="i.date">
    <Todolist_Complete :startDate="i.date" :todoText="i.text" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { todolist } from "./type";
import DatePicker from "@vuepic/vue-datepicker";
import Todolist_Incomplete from "./components/Todolist_Incomplete.vue";
import Todolist_Complete from "./components/Todolist_Complete.vue";
import "@vuepic/vue-datepicker/dist/main.css";

// incompleteArr 어떻게 할까

@Options({
  components: { DatePicker, Todolist_Incomplete, Todolist_Complete },
  data() {
    return {
      date: new Date(),
      startDate: String(new Date()),
      todoText: "" as string,
      rerender: "Force to Rerender",
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
      this.incompleteTodo_arr.push(newTodo);
      this.todoText = "";
      this.startDate = new Date();
    },
    check_emit(value: any) {
      console.log(value);
      console.log(this.incompleteTodo_arr);
    },
  },
})
export default class App extends Vue {
  // !는 해당 변수에 값이 무조건 할당되어있다는 뜻
  todoText!: string;
  startDate!: string;
  rerender!: string;
  completeTodo?: Set<any>;
  incompleteTodo?: Set<any>;
  registerTodo!: () => void;
  incompleteTodo_arr!: Array<todolist>;
  completeTodo_arr!: Array<todolist>;
  check_emit?: () => void;
}
</script>

<style></style>
