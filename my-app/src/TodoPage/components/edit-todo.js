import React, { useEffect, useRef } from 'react';
import styles from "../todo-page.module.css";

const EditTodo = ({ editedTitle, handleTitleChange, handleSaveEdit, setIsEditing }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [editedTitle]);

  return (
    <div className={styles.editContainer}>
      <textarea
        ref={textareaRef}
        value={editedTitle}
        onChange={handleTitleChange}
        className={styles.editInput}
      />
      <div className={styles.editActions}>
        <button
          onClick={handleSaveEdit}
          className={styles.saveButton}
        >
          Сохранить
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className={styles.cancelButton}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default EditTodo;