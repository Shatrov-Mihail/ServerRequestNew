export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const addTodo = (title) => ({
  type: ADD_TODO,
  payload: title,
});

export const updateTodo = (id, title) => ({
  type: UPDATE_TODO,
  payload: { id, title },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});