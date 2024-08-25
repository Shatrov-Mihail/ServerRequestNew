import { useEffect, useState } from "react";
import { todosAPI } from "../api/todos.api";

export const useTodos = (initialState) => {
  const [todos, setTodos] = useState(initialState);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const response = await todosAPI.fetchAll();
      setTodos(response);
    } catch (error) {
      setError("Ошибка получения", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodos = async (todo) => {
    try {
      const newTodo = await todosAPI.create(todo);
      setTodos([...todos, newTodo]);
    } catch (error) {
      setError("Ошибка добавления", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateTodos = async (id, updateTodo) => {
    try {
      const newTodo = await todosAPI.update({ id, title: updateTodo });
      const newTodoList = [...todos];
      newTodoList[
        newTodoList.indexOf(todos.find((todo) => todo.id === id))
      ] = newTodo;
      setTodos(newTodoList);
    } catch (error) {
      setError("Ошибка обновления", error);
    } finally {
      setIsLoading(false);
    }
  };

  const removeTodos = async (id) => {
    try {
      await todosAPI.remove(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      setError("Ошибка удаления", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    todos,
    error,
    getTodos,
    addTodos,
    updateTodos,
    removeTodos,
    isLoading,
  };
};
