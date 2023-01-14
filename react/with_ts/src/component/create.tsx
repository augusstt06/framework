import React, { useState } from "react";
import { type_todo } from "../type";

// useState = 사용자가 입력할때마다 값을 받아온다
// useRef = 사용자가 입력을 마치고 submit을 누를때 값을 받아온다.
function Create() {
  const [todoDate, setTodoDate] = useState<number>(0);
  const [todoText, setTodoText] = useState<string>("");
  const [todoComplete, setTodoComplete] = useState<boolean>(false);

  const todos = Array<type_todo>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "text":
        setTodoText(e.target.value);
        break;
      case "date":
        setTodoDate(Number(e.target.value));
        break;
      default:
        break;
    }
  };
  //   const registerTodo = () => {};
  return (
    <div>
      <input placeholder="할 일을 입력하세요" name="text" />
      <button>등록</button>
    </div>
  );
}
export default Create;
