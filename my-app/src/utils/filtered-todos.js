export const createFilteredTodosHandler = ({
  todos,
  searchValue,
  isSort,
  error,
  isLoading,
}) => {
  const getFilteredTodos = searchValue
    ? todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : isSort
    ? [...todos].sort((a, b) => a.title.localeCompare(b.title))
    : todos;

  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return getFilteredTodos;
};
