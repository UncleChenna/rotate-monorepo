import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "@/services/api/todo";
import { TodoContext } from "@/contexts/TodoContext";
import { Todo } from "@/services/types/todo.types";

type Props = { children: React.ReactNode }

const TodoProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]) 

  const query = useQuery({
    queryKey: ['todos'],
    queryFn: () => getTodos()
  })

  useEffect(() => {
    if (query.data){
      setTodos(query.data)
    }
  }, [query.isSuccess, query.data])

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider