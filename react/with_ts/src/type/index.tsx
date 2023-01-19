import React from "react";
import { Set } from "typescript";

export interface todolist {
  date: string;
  text: string;
}

export interface checkbox {
  complete?: boolean;
  completeHandler: ({ target }: any) => void;
}

export interface todoText {
  complete?: boolean;
  children: React.ReactNode;
}

export interface incompleteTodolistProps extends todolist {
  incompleteTodo: Set<any>;
  setIncompleteTodo: React.Dispatch<React.SetStateAction<any>>;
  completeTodo: Set<any>;
  setCompleteTodo: React.Dispatch<React.SetStateAction<any>>;
  rerender: boolean;
  setRerender: React.Dispatch<React.SetStateAction<any>>;
}
