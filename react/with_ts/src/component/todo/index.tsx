import React, { useState } from "react";
import Create from "./create";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// useState = 사용자가 입력할때마다 값을 받아온다
// useRef = 사용자가 입력을 마치고 submit을 누를때 값을 받아온다.
function Todo() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
        <Create date={startDate} />
      </div>
    </div>
  );
}
export default Todo;
