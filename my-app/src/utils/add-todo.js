import { todosAPI } from "../api/todos.api";

export const createAddTodoHandler = ({ todos, setTodos, setError, setIsLoading }) => {
  const performTodoAddition = async (todo) => {
    try {
      setIsLoading(true);
      const newTodo = await todosAPI.create(todo);
      setTodos([...todos, newTodo]);
    } catch (error) {
      setError("Ошибка добавления: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { performTodoAddition };
};
