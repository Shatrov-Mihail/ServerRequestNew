import { todosAPI } from "../api/todos.api";

export const createUpdateTodoHandler = ({ todos, setTodos, setError, setIsLoading }) => {
  const performTodoUpdate = async (id, updatedContent) => {
    try {
      setIsLoading(true);
      const newTodo = await todosAPI.update({ id, title: updatedContent });
      const newTodoList = todos.map(todo => 
        todo.id === id ? newTodo : todo
      );
      setTodos(newTodoList);
    } catch (error) {
      setError("Ошибка обновления: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { performTodoUpdate };
};