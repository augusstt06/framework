import React from "react";
import { progressbar } from "../../type/index";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// props로 받아오는 totalTodo는 상위컴포넌트의 incomoleteTodo + completeTodo  : 총 할 일의 갯수
// 진도율로 보여줘야할 갯수 : completeTodo의 갯수
function Progress(props: progressbar) {
  const totalTodo = props.totalTodo;
  const completeTodo = props.completeTodo;

  const completePercent = Math.floor((completeTodo / totalTodo) * 100);

  return (
    <div>
      <CircularProgressbar
        value={completePercent}
        text={
          totalTodo === 0
            ? "할 일을\n 입력해주세요"
            : `${completePercent}% 완료!`
        }
        strokeWidth={20}
        styles={{
          root: {
            height: "200px",
          },
          path: {
            stroke: `rgba(62, 152, 199, ${completePercent / 100})`,
            strokeLinecap: "butt",
            transition: "stroke-dashoffset 0.5s ease 0s",
            transformOrigin: "center center",
          },
          trail: {
            stroke: "#d6d6d6",
            strokeLinecap: "butt",
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          text: {
            fill: "#f88",
            fontSize: "10px",
          },
          background: {
            fill: "#3e98c7",
          },
        }}
      />
    </div>
  );
}
export default Progress;
