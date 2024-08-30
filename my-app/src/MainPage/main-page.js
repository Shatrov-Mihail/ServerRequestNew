import { TodosList } from "../components/todo-list/TodosList";
import { ControlPanel } from "../components/control-panel/ControlPanel";
import { useState } from "react";
import styles from "./main-page.module.css";
import { useGetTodo } from '../hooks/use-get-todo';

export const MainPage = () => {
    const {
        isLoading,
        addTodos,
        filteredTodos,
        searchValue,
        isSort,
        setIsSort,
        onSearchChange,
    } = useGetTodo([]);
    const [newTodos, setNewTodos] = useState("");

    const onTodosChange = ({ target }) => setNewTodos(target.value);
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newTodos.trim()) {
            await addTodos(newTodos);
            setNewTodos("");
        }
    };
      
    return (
        <div className={styles.app}>
          <ControlPanel
            newTodos={newTodos}
            searchValue={searchValue}
            isSort={isSort}
            onTodosChange={onTodosChange}
            onSearchChange={onSearchChange}
            setIsSort={setIsSort}
            onSubmit={handleSubmit}
          />
          <TodosList
            isLoading={isLoading}
            todos={filteredTodos}
          />
        </div>
    );
};