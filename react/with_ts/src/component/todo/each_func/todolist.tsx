import React, { FormEvent } from "react";
import { todolist } from "../../../type";

// 받아와야 할것 : 할일의 각각 목록, 완료 여부, 날짜
function TodoList(props: todolist) {
  console.log(props, "한 컴포넌트");
  return (
    <div>
      <h2>날짜 : {props.date}</h2>
      <h2>내용 : {props.todo.text}</h2>
      <h2>완료 여부 : {props.todo.complete ? "완료" : "미완료"} </h2>
    </div>
  );
}
export default TodoList;
