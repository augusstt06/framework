import React from "react";
import { checkbox } from "../../../type";

function Checkbox({ complete, completeHandler }: checkbox) {
  return (
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
