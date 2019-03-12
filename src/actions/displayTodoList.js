import { LIST_TODO_REQUEST, LIST_TODO_REMOVE, LIST_TODO_SUCCESS, LIST_TODO_FAILURE } from './action_types';

export const displayTodoListRequest = () => ({ type: LIST_TODO_REQUEST })

export const displayTodoListSuccess = (tasks) => ({ type: LIST_TODO_SUCCESS, payload: tasks })

export const displayTodoListFailure = (errMsg) => ({
  type: LIST_TODO_FAILURE,
  payload: errMsg
})

export const displayTodoListRemove = (task) => ({
  type: LIST_TODO_REMOVE,
  payload: task
})