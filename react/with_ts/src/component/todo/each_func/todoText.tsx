import React from "react";
import { todoText } from "../../../type";

function TodoText({ complete, children }: todoText) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
