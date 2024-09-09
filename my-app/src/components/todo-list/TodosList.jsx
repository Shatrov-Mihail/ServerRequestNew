import React, { useState } from "react";
import { TodosItem } from "../todo-item/TodoItem";
import { EditTodoItem } from "../edit-todo-item/EditTodoItem";
import styles from "./todoList.module.css";

export const TodosList = ({ todos, onUpdate, onDelete }) => {
  const [changingTodoID, setChangingTodoID] = useState(null);

  const onSave = (id, title) => {
    onUpdate(id, title);
    setChangingTodoID(null);
  };

  return (
    <ul className={styles.todosList}>
      {todos.map(({ id, title }) => (
        <div key={id}>
          {changingTodoID === id ? (
            <EditTodoItem
              id={id}
              title={title}
              onSave={(title) => onSave(id, title)}
              onCancel={() => setChangingTodoID(null)}
            />
          ) : (
            <TodosItem
              id={id}
              title={title}
              setChangingTodoID={setChangingTodoID}
              onDelete={onDelete}
            />
          )}
        </div>
      ))}
    </ul>
  );
};
