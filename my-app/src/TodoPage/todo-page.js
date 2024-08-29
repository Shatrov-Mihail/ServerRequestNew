import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { todosAPI } from "../api/todos.api";
import styles from "./todo-page.module.css";

export const TodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const fetchedTodo = await todosAPI.fetchOne(id);
        setTodo(fetchedTodo);
        setEditedTitle(fetchedTodo.title);
      } catch (error) {
        console.error("Ошибка при загрузке задачи:", error);
        navigate('/404');
      }
    };
    fetchTodo();
  }, [id, navigate]);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [isEditing, editedTitle]);

  const handleEdit = async () => {
    try {
      const updatedTodo = await todosAPI.update(id, { title: editedTitle });
      setTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await todosAPI.remove(id);
      navigate('/');
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  const handleTextareaChange = (e) => {
    setEditedTitle(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };

  if (!todo) return <div>Загрузка...</div>;

  return (
    <div className={styles.todoPage}>
      <div className={styles.header}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>← Назад</button>
        <div>
          <button onClick={() => setIsEditing(true)} className={styles.editButton}>Редактировать</button>
          <button onClick={handleDelete} className={styles.deleteButton}>Удалить</button>
        </div>
      </div>
      {isEditing ? (
        <div className={styles.editContainer}>
          <textarea
            ref={textareaRef}
            value={editedTitle}
            onChange={handleTextareaChange}
            className={styles.editInput}
          />
          <div className={styles.editActions}>
            <button onClick={handleEdit} className={styles.saveButton}>Сохранить</button>
            <button onClick={() => setIsEditing(false)} className={styles.cancelButton}>Отмена</button>
          </div>
        </div>
      ) : (
        <h2 className={styles.todoTitle}>{todo.title}</h2>
      )}
    </div>
  );
};
