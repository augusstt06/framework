import React, { FormEvent, useState } from "react";
import { todolist } from "../type/index";

import "react-datepicker/dist/react-datepicker.css";

function Create() {
  const [todoDate, setTodoDate] = useState<string>("");
  const [todoText, setTodoText] = useState<string>("");
  const [todoComplete, setTodoComplete] = useState<boolean>(false);

  const [todolist, setTodolist] = useState<todolist[]>([]);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const registerTodo = (e: FormEvent<HTMLButtonElement>) => {
    const newTodo = {
      date: todoDate,
      todolist: { text: todoText, complete: false },
    };
    setTodolist([...todolist, newTodo]);
    setTodoText("");
    e.preventDefault();
  };
  console.log(todolist);
  return (
    <div>
      <input
        placeholder="할 일을 입력하세요"
        name="text"
        value={todoText}
        onChange={handleText}
      />
      <button onClick={registerTodo}>등록</button>
    </div>
  );
}
export default Create;
