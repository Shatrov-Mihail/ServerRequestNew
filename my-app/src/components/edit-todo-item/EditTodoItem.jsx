import { useState } from "react";
import styles from "./editTodoItem.module.css";

export const EditTodoItem = ({ title, onSave, onCancel }) => {
  const [updatingTodo, setUpdatingTodo] = useState(title);

  return (
    <div className={styles.editTodoItem}>
      <input
        type="text"
        value={updatingTodo}
        onChange={({ target }) => setUpdatingTodo(target.value)}
      />
      <button onClick={() => onSave(updatingTodo)}>💾</button>
      <button onClick={onCancel}>✖</button>
    </div>
  );
};
