import styles from "./controlPanel.module.css";

export const ControlPanel = ({
  newTodos,
  searchValue,
  isSort,
  onTodosChange,
  onSearchChange,
  setIsSort,
  onSubmit,
}) => {
  return (
    <div className={styles.controlPanel}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Поиск по задачам"
          value={searchValue}
          onChange={onSearchChange}
        />
        <button type="button" onClick={() => setIsSort(!isSort)}>
          {isSort ? "Сбросить сортировку" : "Сортировать по алфавиту"}
        </button>
        <input
          name="todo"
          type="text"
          placeholder="Введите значение..."
          value={newTodos}
          onChange={onTodosChange}
        />
        <button type="submit">Добавить задачу</button>
      </form>
      <h3>Список задач:</h3>
    </div>
  );
};
