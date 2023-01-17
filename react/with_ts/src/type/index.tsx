import React from "react";

export interface todo_prop {
  text: string;
  complete: boolean;
}

export interface todolist {
  date: string | undefined;
  todolist: todo_prop;
}

export interface checkbox {
  complete?: boolean;
  onClick?(): void;
}

export interface todoText {
  complete?: boolean;
  children: React.ReactNode;
}

export interface todolistProps {
  setTodolist: React.Dispatch<React.SetStateAction<Array<todolist>>>;
  todolist: todolist[];
}
