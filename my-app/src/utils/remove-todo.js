import { todosAPI } from "../api/todos.api";

export const RemoveTodo = ({ todos, setTodos, setError, setIsLoading }) => {
  const removeTodos = async (id) => {
    try {
      setIsLoading(true);
      await todosAPI.remove(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      setError("Ошибка удаления: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { removeTodos };
};
