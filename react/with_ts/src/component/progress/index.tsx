import React from "react";
import { progressbar } from "../../type/index";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

// props로 받아오는 totalTodo는 상위컴포넌트의 incomoleteTodo + completeTodo  : 총 할 일의 갯수
// 진도율로 보여줘야할 갯수 : completeTodo의 갯수
function Progress(props: progressbar) {
  const totalTodo = props.totalTodo;
  const completeTodo = props.completeTodo;

  const completePercent = (completeTodo / totalTodo) * 100;

  return (
    <div>
      <CircularProgressbarWithChildren
        value={completePercent}
        text={
          totalTodo === 0 ? "할 일을 입력해주세요" : `${completePercent}% 완료!`
        }
        styles={{
          root: {
            display: "flex",
            height: "100px",
            width: "200px",
            fontSize: "15px",
            background: "beige",
          },
        }}
      >
        <strong>test</strong>
      </CircularProgressbarWithChildren>
    </div>
  );
}
export default Progress;
