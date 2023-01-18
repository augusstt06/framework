import Reac, { useState } from "react";
import { todolist, todolistProps } from "../../../type";
import TodoText from "./todoText";
import Checkbox from "./checkbox";

// 이 컴포넌트에서 각각의 할일에 대한 체크박스, 텍스트 등을 종합
// 받아와야 할것 : 할일의 각각 목록, 완료 여부, 날짜

function TodoList(props: todolistProps) {
  const [complete, setComplete] = useState<boolean>(false);

  const todoItem = props.todoItem;
  const setTodoItem = props.setTodoItem;

  const checkboxHandler = (date: string, text: string, isComplete: boolean) => {
    if (isComplete) {
      todoItem.add(date);
      todoItem.add(text);
      setTodoItem(todoItem);
    } else if (!isComplete && todoItem.has(text)) {
      todoItem.delete(date);
      todoItem.delete(text);
      setTodoItem(todoItem);
    }
  };
  const completeHandler = ({ target }: any) => {
    setComplete(!complete);
    checkboxHandler(props.date, props.text, target.checked);
  };
  return (
    <div>
      <TodoText complete={props.complete}>
        <p>날짜 : {props.date}</p>
        <p>{props.text}</p>
        <p>완료 여부 : {props.complete ? "완료" : "미완료"} </p>
      </TodoText>
      <Checkbox complete={complete} completeHandler={completeHandler} />
    </div>
  );
}
export default TodoList;
