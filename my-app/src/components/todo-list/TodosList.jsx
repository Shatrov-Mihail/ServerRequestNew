import { Link } from "react-router-dom";
import styles from "./todoList.module.css";

const getTodoTitle = (todo) => {
  if (typeof todo.title === 'string') return todo.title;
  if (todo.title && typeof todo.title.title === 'string') return todo.title.title;
  return 'Без названия';
};

export const TodosList = ({ todos, isLoading }) => {
  if (isLoading) return <div className={styles.loadingMessage}>Загрузка...</div>;
  
  if (!todos || todos.length === 0) return <div className={styles.emptyMessage}>Задач нет</div>;

  return (
    <ul className={styles.todosList}>
      {todos.map((todo) => {
        const id = todo.id || todo._id;
        const title = getTodoTitle(todo);
        
        return (
          <li key={id} className={styles.listItem}>
            <Link to={`/task/${id}`}>
              {title.length > 30 ? title.substring(0, 30) + "..." : title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
