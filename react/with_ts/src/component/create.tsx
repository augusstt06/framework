import React, { FormEvent, useState } from "react";
import { todolist } from "../type";

// useState = 사용자가 입력할때마다 값을 받아온다
// useRef = 사용자가 입력을 마치고 submit을 누를때 값을 받아온다.
function Create() {
  const [todoDate, setTodoDate] = useState<string>("");
  const [todoText, setTodoText] = useState<string>("");
  const [todoComplete, setTodoComplete] = useState<boolean>(false);

  const [todolist, setTodolist] = useState<todolist[]>([]);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoDate(e.target.value);
  };

  const registerTodo = (e: FormEvent<HTMLButtonElement>) => {
    const newTodo = {
      date: todoDate,
      todolist: { text: todoText, complete: false },
    };
    setTodolist([...todolist, newTodo]);
    setTodoText("");
    setTodoDate("");
    e.preventDefault();
  };
  console.log(todolist);
  return (
    <div>
      <input
        placeholder="날짜 입력"
        name="date"
        onChange={handleDate}
        value={todoDate}
      />
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
