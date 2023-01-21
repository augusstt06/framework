import React from "react";
import { progressbar } from "../../type/index";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

// props로 받아오는 totalTodo는 상위컴포넌트의 incomoleteTodo + completeTodo  : 총 할 일의 갯수
// 진도율로 보여줘야할 갯수 : completeTodo의 갯수
function Progress(props: progressbar) {
  const totalTodo = props.totalTodo;
  const completeTodo = props.completeTodo;
  return (
    <div>
      <CircularProgressbarWithChildren
        value={10}
        styles={{
          root: { height: "100px" },
          path: {
            stroke: "#4fce84",
            strokeLinecap: "butt",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          trail: {
            stroke: "#d7d7d7",
          },
        }}
      >
        <strong>test</strong>
      </CircularProgressbarWithChildren>
    </div>
  );
}
export default Progress;
