import React from "react";
import { checkbox } from "../../../type";
// import "../../../css/checkbox.css";

function Checkbox({ complete, completeHandler }: checkbox) {
  return (
    // <div className="container" onClick={onClick}>
    //   <div className="checkIcon">{complete && "✔︎"}</div>
    // </div>
    <div>
      <input
        type="checkbox"
        checked={complete}
        onChange={(e: React.ChangeEvent) => completeHandler(e)}
      />
    </div>
  );
}
export default Checkbox;
