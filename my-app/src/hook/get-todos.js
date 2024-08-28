import { useEffect, useState } from "react";
import { todosAPI } from "../api/todos.api";
import { AddTodo } from "../utils/add-todo";
import { RemoveTodo } from "../utils/remove-todo";
import { UpdateTodo } from "../utils/update-todo";

export const useGetTodo = (initialState) => {
  const [todos, setTodos] = useState(initialState);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const response = await todosAPI.fetchAll();
      setTodos(response);
    } catch (error) {
      setError("Ошибка получения: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const { addTodos } = AddTodo({ todos, setTodos, setError, setIsLoading });
  const { removeTodos } = RemoveTodo({ todos, setTodos, setError, setIsLoading });
  const { updateTodo } = UpdateTodo({ todos, setTodos, setError, setIsLoading });

  return {
    todos,
    error,
    isLoading,
    getTodos,
    addTodos,
    removeTodos,
    updateTodo
  };
};
