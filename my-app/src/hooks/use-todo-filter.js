import { useState, useEffect, useCallback } from "react";

const onSearchChange = (setSearchValue) => ({ target }) => setSearchValue(target.value);

export const useTodoFilter = (todos) => {
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [searchValue, setSearchValue] = useState("");
  const [isSort, setIsSort] = useState(false);

  const memoizedOnSearchChange = useCallback(onSearchChange(setSearchValue), []);

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

  return { filteredTodos, searchValue, isSort, setSearchValue, setIsSort, onSearchChange: memoizedOnSearchChange };
};
