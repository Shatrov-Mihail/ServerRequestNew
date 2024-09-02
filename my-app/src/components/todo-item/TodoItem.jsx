import styles from './todoItem.module.css'

export const TodosItem = ({ id, title, setChangingTodoID, onDelete }) => {
  return (
    <li key={id} className={styles.listItem}>
      {title}
      <div className={styles.buttonList}>
        <button onClick={() => setChangingTodoID(id)}>✎</button>
        <button onClick={() => onDelete(id)}>🗑</button>
      </div>
    </li>
  );
};
