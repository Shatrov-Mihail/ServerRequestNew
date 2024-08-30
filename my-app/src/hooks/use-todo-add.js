import { useCallback } from "react";
import { todosAPI } from "../api/todos.api";

export const useTodoAdd = (todos, setTodos) => {
  const addTodos = useCallback(async (newTodo) => {
    try {
      const addedTodo = await todosAPI.create({ title: newTodo });
      const updatedTodos = [...todos, addedTodo];
      setTodos(updatedTodos);
      return updatedTodos;
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
      return todos;
    }
  }, [todos, setTodos]);

  return { addTodos };
};
