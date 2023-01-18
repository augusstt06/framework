import React from "react";
import { Set } from "typescript";

export interface todolist {
  date: string;
  text: string;
  complete?: boolean;
}

export interface checkbox {
  complete?: boolean;

  completeHandler: ({ target }: any) => void;
}

export interface todoText {
  complete?: boolean;
  children: React.ReactNode;
}

export interface todolistProps extends todolist {
  completeTodo: Set<any>;
  setCompleteTodo: React.Dispatch<React.SetStateAction<any>>;
}
