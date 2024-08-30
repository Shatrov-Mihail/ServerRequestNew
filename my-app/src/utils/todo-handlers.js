import { todosAPI } from "../api/todos.api";

export const createTodoHandlers = (navigate, setTodo, setIsEditing) => {
  const handleSaveEdit = async (id, editedTitle) => {
    try {
      const updatedTodo = await todosAPI.update(id, { title: editedTitle });
      setTodo(updatedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error("Ошибка при обновлении задачи:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await todosAPI.remove(id);
      navigate("/");
    } catch (error) {
      console.error("Ошибка при удалении задачи:", error);
    }
  };

  const handleTitleChange = (e, setEditedTitle) => {
    setEditedTitle(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return { handleSaveEdit, handleDelete, handleTitleChange };
};
