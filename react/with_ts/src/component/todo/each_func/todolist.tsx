import React, { useState } from "react";
import { incompleteTodolistProps, todolist } from "../../../type";
import TodoText from "./todoText";
import Checkbox from "./checkbox";

// 컴포넌트 역할 : text, date, complete 여부를 받아와서 종합하는 컴포넌트
// 하위 컴포넌트 : checkbox, Todotext,

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
    props.setRerender(!props.rerender);
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

export function TodolistComplete(props: todolist) {
  return (
    <div>
      <TodoText>
        <p>날짜 : {props.date}</p>
        <p>{props.text}</p>
      </TodoText>
    </div>
  );
}
