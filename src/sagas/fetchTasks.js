import { LIST_TODO_REQUEST } from '../actions/action_types';
import { displayTodoListSuccess, displayTodoListFailure } from '../actions/displayTodoList';
import { put, takeEvery } from 'redux-saga/effects';
import TaskHandler from '../services/taskHandler'

function* startFetchTaskSagaFlow() {
  try {
    const tasks = yield TaskHandler.fetchTask();
    yield put(displayTodoListSuccess(tasks.data));
  } catch(err) {
    yield put(displayTodoListFailure(err));
  }  
}

export function* fetchTaskWatcher() {
  yield takeEvery(LIST_TODO_REQUEST, startFetchTaskSagaFlow);
}