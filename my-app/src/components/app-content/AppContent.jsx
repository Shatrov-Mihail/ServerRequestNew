import React, { useState } from "react";
import styles from "./app.module.css";
import { useTodosContext } from "../../context/TodosContext";
import { ControlPanel } from "../control-panel/ControlPanel";
import { TodosList } from "../todo-list/TodosList";

export const AppContent = () => {
  const {
    todos,
    addTodos,
    error,
    isLoading,
  } = useTodosContext();
  const [newTodos, setNewTodos] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isSort, setIsSort] = useState(false);

  const onTodosChange = ({ target }) => setNewTodos(target.value);
  const onSearchChange = ({ target }) => setSearchValue(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodos(newTodos);
    setNewTodos("");
  };

  const filteredTodos = searchValue
    ? todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : isSort
    ? [...todos].sort((a, b) => a.title.localeCompare(b.title))
    : todos;

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка</div>;

  return (
    <div className={styles.app}>
      <ControlPanel
        newTodos={newTodos}
        searchValue={searchValue}
        isSort={isSort}
        onTodosChange={onTodosChange}
        onSearchChange={onSearchChange}
        setIsSort={setIsSort}
        setSearchValue={setSearchValue}
        onSubmit={handleSubmit}
      />
      <TodosList
        className="todoList"
        todos={filteredTodos}
      />
    </div>
  );
};