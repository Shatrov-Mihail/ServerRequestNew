import React from 'react';
import styles from "../todo-page.module.css";

const TodoHeader = ({ navigate, setIsEditing, handleDelete }) => (
  <div className={styles.header}>
    <button onClick={() => navigate(-1)} className={styles.backButton}>
      ↩ Назад
    </button>
    <div>
      <button
        onClick={() => setIsEditing(true)}
        className={styles.editButton}
      >
        Редактировать
      </button>
      <button
        onClick={handleDelete}
        className={styles.deleteButton}
      >
        Удалить
      </button>
    </div>
  </div>
);

export default TodoHeader;