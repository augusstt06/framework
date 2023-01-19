import React, { FormEvent, useState } from "react";
import { todolist_set } from "../../type";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoList from "./each_func/todolist";

// useState = 사용자가 입력할때마다 값을 받아온다
// useRef = 사용자가 입력을 마치고 submit을 누를때 값을 받아온다.

// 완료된 할것에선 체크박스빼기
// 완료되면 바로 렌더링 되게 바꾸기

function Todo() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [todoText, setTodoText] = useState<string>("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const [completeTodo, setCompleteTodo] = useState(new Set<todolist_set>());
  const [incompleteTodo, setIncompleteTodo] = useState(new Set<todolist_set>());
  console.log(incompleteTodo, "안한거");
  console.log(completeTodo, "한거");
  const complete_arr = Array.from(completeTodo);
  const incomplete_arr = Array.from(incompleteTodo);
  // set에 들어갈 객체 수정하기
  // 삭제 버튼 만들기

  const registerTodo_set = (e: FormEvent<HTMLButtonElement>) => {
    const newTodo = {
      // 우선 변환만 시켜놓고 추후에 수정 => 날짜 타입 수정
      date: String(startDate),
      text: todoText,
    };
    incompleteTodo.add(newTodo);
    setIncompleteTodo(incompleteTodo);
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

        <button onClick={registerTodo_set}>등록</button>
      </div>
      <div></div>
      <h2>완료되지 않은 할것들</h2>
      {incomplete_arr && incomplete_arr.length !== 0 ? (
        incomplete_arr.map((data) => (
          <div key={data.date}>
            <TodoList
              date={data.date}
              text={data.text}
              incompleteTodo={incompleteTodo}
              setIncompleteTodo={setIncompleteTodo}
              completeTodo={completeTodo}
              setCompleteTodo={setCompleteTodo}
            />
          </div>
        ))
      ) : (
        <div>할 일을 등록해주세요</div>
      )}
      <h2>완료된 할것들</h2>
      {complete_arr && complete_arr.length !== 0 ? (
        complete_arr.map((data) => (
          <div key={data.date}>
            <TodoList
              date={data.date}
              text={data.text}
              incompleteTodo={incompleteTodo}
              setIncompleteTodo={setIncompleteTodo}
              completeTodo={completeTodo}
              setCompleteTodo={setCompleteTodo}
            />
          </div>
        ))
      ) : (
        <div>할 일을 완료해주세요</div>
      )}
    </div>
  );
}
export default Todo;
