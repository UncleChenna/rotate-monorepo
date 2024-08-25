import React from "react";
import { createContext } from "react";
import { Todo } from "@/services/types/todo.types";

// Define the shape of the context, including the state and its updater function
export type TodoContextType = {
  todos: Todo[]; // Array of Todo items
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the Todo array
}

// Create the context with an initial empty object cast to TodoContextType
export const TodoContext = createContext({} as TodoContextType);
