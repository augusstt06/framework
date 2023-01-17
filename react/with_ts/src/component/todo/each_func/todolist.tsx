import React, { Children } from "react";
import { todolist } from "../../../type";
import TodoText from "./todoText";
import Checkbox from "./checkbox";

// 이 컴포넌트에서 각각의 할일에 대한 체크박스, 텍스트 등을 종합
// 받아와야 할것 : 할일의 각각 목록, 완료 여부, 날짜

function TodoList(props: todolist) {
  return (
    <div>
      <TodoText complete={props.complete}>
        <h2>날짜 : {props.date}</h2>
        <h2>{props.text}</h2>
        <h2>완료 여부 : {props.complete ? "완료" : "미완료"} </h2>
      </TodoText>
      <Checkbox />
    </div>
  );
}
export default TodoList;
