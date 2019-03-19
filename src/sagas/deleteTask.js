import { LIST_TODO_REMOVE } from "../actions/action_types";
import { takeEvery } from 'redux-saga/effects';
import TaskHandler from '../services/taskHandler' ;

function* startRemoveTaskSagaFlow(deletedTask) {
  yield TaskHandler.removeTask(deletedTask);
}

export function* deleteTaskWatcher() {
  yield takeEvery(LIST_TODO_REMOVE, startRemoveTaskSagaFlow);
}