import React, { useState } from "react";
import { incompleteTodolistProps, todolist_set } from "../../../type";
import TodoText from "./todoText";
import Checkbox from "./checkbox";

// 이 컴포넌트에서 각각의 할일에 대한 체크박스, 텍스트 등을 종합
// 받아와야 할것 : 할일의 각각 목록, 완료 여부, 날짜

export function TodoListIncomplete(props: incompleteTodolistProps) {
  const [complete, setComplete] = useState<boolean>(false);

  const completeTodo = props.completeTodo;
  const setCompleteTodo = props.setCompleteTodo;
  const incompleteTodo = props.incompleteTodo;
  const setIncompleteTodo = props.setIncompleteTodo;

  const checkboxHandler = (text: string, isComplete: boolean) => {
    if (isComplete) {
      const newTodo = {
        date: String(props.date),
        text: props.text,
      };

      completeTodo.add(newTodo);
      setCompleteTodo(completeTodo);

      incompleteTodo.forEach((data) =>
        JSON.stringify(data) === JSON.stringify(newTodo)
          ? incompleteTodo.delete(data)
          : ""
      );
      setIncompleteTodo(incompleteTodo);
    } else if (!isComplete && completeTodo.has(text)) {
      const newTodo = {
        date: String(props.date),
        text: props.text,
      };
      completeTodo.delete(newTodo);
      setCompleteTodo(completeTodo);
    }
  };

  const completeHandler = ({ target }: any) => {
    setComplete(!complete);
    checkboxHandler(props.text, target.checked);
  };
  return (
    <div>
      <TodoText>
        <p>날짜 : {props.date}</p>
        <p>{props.text}</p>
      </TodoText>
      <Checkbox complete={complete} completeHandler={completeHandler} />
    </div>
  );
}

export function TodolistComplete(props: todolist_set) {
  return (
    <div>
      <TodoText>
        <p>날짜 : {props.date}</p>
        <p>{props.text}</p>
      </TodoText>
    </div>
  );
}
