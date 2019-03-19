import { ADD_TODO_REQUEST, ADD_TODO_SUCCESS, ADD_TODO_FAILURE } from './action_types';

export const addTodoRequest = (task) => ({
  type: ADD_TODO_REQUEST,
  payload: task
})

export const addTodoSuccess = (task) => ({
  type: ADD_TODO_SUCCESS,
  payload: task
})

export const addTodoFailure = (errMsg) => ({
  type: ADD_TODO_FAILURE,
  payload: errMsg
})