import React, { ChangeEventHandler, useRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import FocusTrap from "focus-trap-react";
import { DayPicker } from "react-day-picker";
import { usePopper } from "react-popper";

function Calendar() {
  return (
    <div>
      <DayPicker />
    </div>
  );
}
export default Calendar;
