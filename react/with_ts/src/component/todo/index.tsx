import React, { FormEvent, useState } from "react";
import { todolist } from "../../type";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoList from "./each_func/todolist";

// useState = 사용자가 입력할때마다 값을 받아온다
// useRef = 사용자가 입력을 마치고 submit을 누를때 값을 받아온다.

function Todo() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [todoText, setTodoText] = useState<string>("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const [todolist, setTodolist] = useState<todolist[]>([]);

  const registerTodo = (e: FormEvent<HTMLButtonElement>) => {
    const newTodo = {
      // 우선 변환만 시켜놓고 추후에 수정
      date: String(startDate),
      todo: { text: todoText, complete: false },
    };
    setTodolist([...todolist, newTodo]);
    setTodoText("");
    setStartDate(new Date());
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <input
          placeholder="할 일을 입력하세요"
          name="text"
          value={todoText}
          onChange={handleText}
        />
        <button onClick={registerTodo}>등록</button>
      </div>
      <div></div>
      {todolist.map((data) => (
        <div key={data.date}>
          <TodoList date={data.date} todo={data.todo} />
        </div>
      ))}
    </div>
  );
}
export default Todo;
