import React from "react";

export interface todolist {
  date: string | undefined;

  text: string;
  complete: boolean;
}

export interface checkbox {
  complete?: boolean;
  onClick?(): void;
}

export interface todoText {
  complete?: boolean;
  children: React.ReactNode;
}

export interface todolistProps extends todolist {
  modifyTodo: () => void;
}
// export interface todolistProps {
//   setTodolist: React.Dispatch<React.SetStateAction<Array<todolist>>>;
//   todolist: todolist[];
// }
