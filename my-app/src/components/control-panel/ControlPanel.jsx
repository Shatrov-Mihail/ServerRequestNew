import React from 'react';
import styles from '../../app.module.css';

export const ControlPanel = ({
  newTodos,
  searchValue,
  isSort,
  onTodosChange,
  onSearchChange,
  setIsSort,
  onSubmit
}) => {
  return (
    <div className={styles.controlPanel}>
      <div className={styles.addTodoSection}>
        <input
          type="text"
          value={newTodos}
          onChange={onTodosChange}
          placeholder="Добавить задачу"
          className={styles.addTodoInput}
        />
        <button onClick={onSubmit} className={styles.addTodoButton}>Добавить</button>
      </div>
      <div className={styles.searchSection}>
        <input
          type="text"
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Поиск"
          className={styles.searchInput}
        />
        <button onClick={() => setIsSort(!isSort)} className={styles.sortButton}>
          {isSort ? '↓' : '↑'}
        </button>
      </div>
    </div>
  );
};
