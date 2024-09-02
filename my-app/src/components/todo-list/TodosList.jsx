import { useState } from "react";
import { TodosItem } from "../todo-item/TodoItem";
import { EditTodoItem } from "../edit-todo-item/EditTodoItem";
import styles from "./todoList.module.css";
import { useTodosContext } from "../../context/TodosContext";

export const TodosList = ({ todos }) => {
  const { isLoading, updateTodos, removeTodos } = useTodosContext();
  const [changingTodoID, setChangingTodoID] = useState(null);

  const onSave = (updatingTodo) => {
    updateTodos(changingTodoID, updatingTodo);
    setChangingTodoID(null);
  };

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <ul className={styles.todosList}>
      {todos.map(({ id, title }) => (
        <div key={id}>
          {changingTodoID === id ? (
            <EditTodoItem
              id={id}
              title={title}
              onSave={onSave}
              onCancel={() => setChangingTodoID(null)}
            />
          ) : (
            <TodosItem
              id={id}
              title={title}
              setChangingTodoID={setChangingTodoID}
              onDelete={removeTodos}
            />
          )}
        </div>
      ))}
    </ul>
  );
};
