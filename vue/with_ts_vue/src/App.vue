<template>
  <div>Framework practice</div>
  {{ testt }}
  <button @click="test">?</button>
  <div v-show="testt">뭐지</div>
  <!-- <div v-else>폴ㅇ스</div> -->
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
  <div v-if="incompleteTodo_arr && incompleteTodo_arr.length !== 0">
    <div>??뭔데</div>
    <div v-for="i in incompleteTodo_arr.length" v-bind:key="i">
      <Todolist_Incomplete
        :startDate="incompleteTodo_arr[i].date"
        :todoText="incompleteTodo_arr[i].text"
        :incompleteTodo="incompleteTodo"
        :completeTodo="completeTodo"
        :rerender="rerender"
      />
    </div>
  </div>
  <h3>완료한 할일</h3>
  <!-- <div v-if="completeTodo_arr !== undefined"> -->
  <div v-for="i in completeTodo_arr.length" v-bind:key="i">
    <Todolist_Complete
      :startDate="completeTodo_arr[i].date"
      :todoText="completeTodo_arr[i].text"
    />
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { watch } from "vue";

import DatePicker from "@vuepic/vue-datepicker";
import Todolist_Incomplete from "./components/Todolist_Incomplete.vue";
import Todolist_Complete from "./components/Todolist_Complete.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import { todolist } from "./type";

let startDate = String(new Date());
let todoText = "";
let rerender = "Force to rerender";
const completeTodo: Set<todolist> = new Set();
const completeTodo_arr = Array.from(completeTodo);
const incompleteTodo: Set<todolist> = new Set();
const incompleteTodo_arr = Array.from(incompleteTodo);
let testt = false;
const test = () => {
  testt = !testt;
  console.log(testt);
};

const registerTodo = () => {
  const newTodo = {
    date: startDate,
    text: todoText,
  };
  incompleteTodo.add(newTodo);
  incompleteTodo_arr.push(newTodo);
  todoText = "";
  startDate = String(new Date());
  rerender = "";
};
</script>
<!-- 
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ref } from "vue";
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
      testArr: [],
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
    test() {
      this.testArr.push(1);
      console.log(this.testArr);
      console.log(typeof this.testArr);
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
</script> -->

<style></style>
