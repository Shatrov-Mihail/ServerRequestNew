import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { todosAPI } from "../api/todos.api";
import { createTodoHandlers } from "../utils";
import TodoHeader from "./components/todo-header";
import EditTodo from "./components/edit-todo";
import ViewTodo from "./components/view-todo";
import styles from "./todo-page.module.css";

export const TodoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

  const {
    handleSaveEdit,
    handleDelete,
    handleTitleChange,
  } = createTodoHandlers(navigate, setTodo, setIsEditing);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const fetchedTodo = await todosAPI.fetchOne(id);
        setTodo(fetchedTodo);
        setEditedTitle(fetchedTodo.title);
      } catch (error) {
        console.error("Ошибка при загрузке задачи:", error);
        navigate("/404");
      }
    };
    fetchTodo();
  }, [id, navigate]);

  if (!todo) return <div>Загрузка...</div>;

  return (
    <div className={styles.todoPage}>
      <TodoHeader
        navigate={navigate}
        setIsEditing={setIsEditing}
        handleDelete={() => handleDelete(id)}
      />
      {isEditing ? (
        <EditTodo
          editedTitle={editedTitle}
          handleTitleChange={(e) => handleTitleChange(e, setEditedTitle)}
          handleSaveEdit={() => handleSaveEdit(id, editedTitle)}
          setIsEditing={setIsEditing}
        />
      ) : (
        <ViewTodo title={todo.title} />
      )}
    </div>
  );
};
