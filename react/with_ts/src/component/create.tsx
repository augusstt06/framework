import React, { useRef } from "react";

// useState = 사용자가 입력할때마다 값을 받아온다
// useRef = 사용자가 입력을 마치고 submit을 누를때 값을 받아온다.
function Create() {
  const todoDate = useRef<HTMLInputElement>(null);
  const todoText = useRef<string>("");
  const todoComplete = useRef<boolean>(false);

  const todoList = [];

  const submitText = (
    e: React.ChangeEvent<HTMLInputElement>,
    text: React.MutableRefObject<string>
  ) => {
    const value = e.target.value;
    text.current = value;
  };

  const registerTodo = () => {
    console.log(todoText.current, "등록 완료");
  };
  console.log(todoText, "최초값");
  return (
    <div>
      <input
        placeholder="할 일을 입력하세요"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          submitText(e, todoText);
        }}
      />
      <button onClick={registerTodo}>등록</button>
    </div>
  );
}
export default Create;
