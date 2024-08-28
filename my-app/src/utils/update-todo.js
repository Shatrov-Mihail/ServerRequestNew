import { todosAPI } from "../api/todos.api";

export const UpdateTodo = ({ todos, setTodos, setError, setIsLoading }) => {
  const updateTodo = async (id, updateTodo) => {
    try {
      setIsLoading(true);
      const newTodo = await todosAPI.update({ id, title: updateTodo });
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

  return { updateTodo };
};