import React, { ReactElement } from "react";
import { checkbox } from "../../../type";
import "../../../css/checkbox.css";

function Checkbox({ complete, onClick }: checkbox) {
  return (
    <div className="container" onClick={onClick}>
      <div className="checkIcon">{complete && "✔︎"}</div>
    </div>
  );
}
export default Checkbox;
