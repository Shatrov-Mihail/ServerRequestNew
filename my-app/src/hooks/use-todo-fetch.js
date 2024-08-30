import { useState, useCallback } from "react";
import { todosAPI } from "../api/todos.api";

export const useTodoFetch = (initialTodos) => {
  const [todos, setTodos] = useState(initialTodos);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedTodos = await todosAPI.fetchAll();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { todos, setTodos, isLoading, fetchTodos };
};
