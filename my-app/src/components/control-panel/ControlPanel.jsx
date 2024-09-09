import React, { useState } from "react";
import styles from "./controlPanel.module.css";

export const ControlPanel = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className={styles.controlPanel}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите значение..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Добавить задачу</button>
      </form>
    </div>
  );
};
