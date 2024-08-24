import React from "react";
import { createContext } from "react";
import { Todo } from "@/services/types/todo.types";

export type TodoContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoContext = createContext({} as TodoContextType);