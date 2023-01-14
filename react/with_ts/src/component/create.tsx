import React, { useState } from "react";
import { todo } from "../type";

function Create() {
  const [todo, setTodo] = useState<todo>();

  //   const typingTodo = (e:React.Event) => {

  //   }

  return (
    <div>
      <input placeholder="할 일을 입력하세요" />
      <button>등록</button>
    </div>
  );
}
export default Create;
