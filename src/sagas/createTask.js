import { put, takeEvery } from 'redux-saga/effects';
import { ADD_TODO_REQUEST } from '../actions/action_types';
import { addTodoSuccess, addTodoFailure } from '../actions/addTodo';
import TaskHandler from '../services/taskHandler';

export function* startCreateTaskSagaFlow(task) {
  try {
    const createdTask = yield TaskHandler.createTask(task);
    yield put(addTodoSuccess(createdTask));
  } catch(err) {
    yield put(addTodoFailure(err));
  }
}

export function* createTaskWatcher() {
  yield takeEvery(ADD_TODO_REQUEST, startCreateTaskSagaFlow);
}