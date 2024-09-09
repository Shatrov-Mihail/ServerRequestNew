import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./app.module.css";
import { ControlPanel } from "./components/control-panel/ControlPanel";
import { TodosList } from "./components/todo-list/TodosList";
import { addTodo, updateTodo, removeTodo, setTodos, setLoading, setError } from "./redux/actions/todoActions";
import { todosAPI } from "./api/todos.api";

export const App = () => {
  const dispatch = useDispatch();
  const { todos, isLoading, error } = useSelector((state) => state.todo);

  useEffect(() => {
    const fetchTodos = async () => {
      dispatch(setLoading(true));
      try {
        const todos = await todosAPI.fetchAll();
        dispatch(setTodos(todos));
      } catch (error) {
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchTodos();
  }, [dispatch]);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  };

  const handleUpdateTodo = (id, title) => {
    dispatch(updateTodo(id, title));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={styles.app}>
      <ControlPanel onAddTodo={handleAddTodo} />
      <TodosList todos={todos} onUpdate={handleUpdateTodo} onDelete={handleRemoveTodo} />
    </div>
  );
};
