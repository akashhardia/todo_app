import { all, fork } from 'redux-saga/effects'
import { createTaskWatcher } from './createTask'
import { deleteTaskWatcher } from './deleteTask';
import { fetchTaskWatcher } from './fetchTasks';

export default function* rootSaga() {
  yield all([
    fork(createTaskWatcher),
    fork(deleteTaskWatcher),
    fork(fetchTaskWatcher)
  ]);
}