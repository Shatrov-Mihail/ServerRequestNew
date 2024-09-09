import {
    ADD_TODO,
    UPDATE_TODO,
    REMOVE_TODO,
    SET_TODOS,
    SET_LOADING,
    SET_ERROR,
  } from '../actions/todoActions';
  
  const initialState = {
    todos: [],
    isLoading: false,
    error: null,
  };
  
  export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todos: [...state.todos, { id: Date.now(), title: action.payload }] };
      case UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
          ),
        };
      case REMOVE_TODO:
        return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
      case SET_TODOS:
        return { ...state, todos: action.payload };
      case SET_LOADING:
        return { ...state, isLoading: action.payload };
      case SET_ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };