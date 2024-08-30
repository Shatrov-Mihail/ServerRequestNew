import { todosAPI } from "../api/todos.api";

export const createRemoveTodoHandler = ({
  todos,
  setTodos,
  setError,
  setIsLoading,
}) => {
  const performTodoRemovals = async (id) => {
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
  return { performTodoRemovals };
};
