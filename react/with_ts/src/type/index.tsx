export interface todo_prop {
  text: string;
  complete: boolean;
}

export interface todolist {
  date: string | undefined;
  todolist: todo_prop;
}
