import React, { FormEvent, useState } from "react";
import { todolist } from "../type/index";

import "react-datepicker/dist/react-datepicker.css";

function Create(props: any) {
  const [todoText, setTodoText] = useState<string>("");
  const [todoComplete, setTodoComplete] = useState<boolean>(false);

  // props.date => 슬라이싱 해서 날짜 스트링으로 변경하기
  // 체크박스 사용해서 완료여부 변경 가능하게 만들기
  const [todolist, setTodolist] = useState<todolist[]>([]);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const registerTodo = (e: FormEvent<HTMLButtonElement>) => {
    const newTodo = {
      date: props.date,
      todolist: { text: todoText, complete: false },
    };
    setTodolist([...todolist, newTodo]);
    setTodoText("");
    e.preventDefault();
  };

  return (
    <div>
      <input
        placeholder="할 일을 입력하세요"
        name="text"
        value={todoText}
        onChange={handleText}
      />
      <button onClick={registerTodo}>등록</button>
      <div>
        {todolist.map((data) => (
          <div key={data.date}>
            {/* <div>목표 날짜 : {data.date}</div> */}
            <div>할일 : {data.todolist.text}</div>
            {/* <div>완료여부 : {data.todolist.complete}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
export default Create;
