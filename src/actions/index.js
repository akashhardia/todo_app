import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from './action_types';

export const addTodo = task => ({
  type: ADD_TODO_REQUEST,
  task
})

export const removeTodo = task => ({
  type: REMOVE_TODO,
  task
})

export const initializeTodo = tasks => ({
  type: INITIALIZE_TODO,
  tasks
})