import { Vue } from "vue-class-component";

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
}

export interface incompleteTodolistProps {
  incompleteTodo: Set<any>;
  completeTodo: Set<any>;
  rerender: boolean;
}
