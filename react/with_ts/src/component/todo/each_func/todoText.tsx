import React from "react";
import { todoText } from "../../../type";

function TodoText({ children }: todoText) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
export default TodoText;
