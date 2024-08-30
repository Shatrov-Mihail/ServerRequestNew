import { useEffect } from "react";
import { useTodoFetch } from "./use-todo-fetch";
import { useTodoFilter } from "./use-todo-filter";
import { useTodoAdd } from "./use-todo-add";

export const useGetTodo = (initialTodos = []) => {
  const { todos, setTodos, isLoading, fetchTodos } = useTodoFetch(initialTodos);
  const { filteredTodos, searchValue, isSort, setSearchValue, setIsSort, onSearchChange } = useTodoFilter(todos);
  const { addTodos } = useTodoAdd(todos, setTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return {
    isLoading,
    addTodos,
    filteredTodos,
    searchValue,
    isSort,
    setSearchValue,
    setIsSort,
    onSearchChange,
  };
};
