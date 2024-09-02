import React, { createContext, useContext, useState, useEffect } from "react";
import { todosAPI } from "../api/todos.api";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
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
      setError("Ошибка получения");
    } finally {
      setIsLoading(false);
    }
  };

  const addTodos = async (title) => {
    try {
      const newTodo = await todosAPI.create(title);
      setTodos([...todos, newTodo]);
    } catch (error) {
      setError("Ошибка добавления");
    }
  };

  const updateTodos = async (id, title) => {
    try {
      const updatedTodo = await todosAPI.update({ id, title });
      setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    } catch (error) {
      setError("Ошибка обновления");
    }
  };

  const removeTodos = async (id) => {
    try {
      await todosAPI.remove(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      setError("Ошибка удаления");
    }
  };

  return (
    <TodosContext.Provider
      value={{ todos, error, isLoading, addTodos, updateTodos, removeTodos }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);