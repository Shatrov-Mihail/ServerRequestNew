import { useState, useEffect, useCallback } from "react";
import { todosAPI } from "../api/todos.api";

const onSearchChange = (setSearchValue) => ({ target }) => setSearchValue(target.value);

export const useGetTodo = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState(initialTodos);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isSort, setIsSort] = useState(false);

  const memoizedOnSearchChange = useCallback(onSearchChange(setSearchValue), []);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      try {
        const fetchedTodos = await todosAPI.fetchAll();
        setTodos(fetchedTodos);
        setFilteredTodos(fetchedTodos);
      } catch (error) {
        console.error("Ошибка при загрузке задач:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTodos();
  }, []);

  useEffect(() => {
    let result = todos;
    if (searchValue) {
      result = result.filter(todo => 
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    if (isSort) {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }
    setFilteredTodos(result);
  }, [todos, searchValue, isSort]);

  const addTodos = async (newTodo) => {
    setIsLoading(true);
    try {
      const addedTodo = await todosAPI.create({ title: newTodo });
      setTodos(prevTodos => [...prevTodos, addedTodo]);
    } catch (error) {
      console.error("Ошибка при добавлении задачи:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    addTodos,
    filteredTodos,
    searchValue,
    isSort,
    setSearchValue,
    setIsSort,
    onSearchChange: memoizedOnSearchChange,
  };
};
