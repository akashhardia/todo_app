import { put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';
import { LIST_TODO_REQUEST, LIST_TODO_SUCCESS, LIST_TODO_FAILURE, LIST_TODO_REMOVE, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS } from '../actions/action_types';

function* fetchTasks() {
  try {
    const tasks = yield axios.get('http://localhost:5000/tasks');
    yield put({ type: LIST_TODO_SUCCESS, payload: tasks.data });
  } catch(err) {
    yield put({ type: LIST_TODO_FAILURE, payload: err });
  }  
}

function* removeTasks(deletedTask) {
  yield axios.delete(`http://localhost:5000/tasks/${deletedTask.payload.id}`);
}

function* createTask(task) {
  console.log('task to be created', task);
  try {
    const createdTask = yield axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      data: {
        "taskName": task.payload
      }
    });
    yield put({ type: ADD_TODO_SUCCESS, payload: createdTask });
  } catch(err) {
    yield put({ type: ADD_TODO_FAILURE, payload: err });
  }
}

function* actionWatcher() {
  yield takeEvery(LIST_TODO_REQUEST, fetchTasks);
  yield takeEvery(LIST_TODO_REMOVE, removeTasks);
  yield takeEvery(ADD_TODO_REQUEST, createTask);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}