import axios from 'axios';

export default class TaskHandler {

  static createTask(task) {
    return axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      data: {
        'taskName': task.payload
      }
    });
  }

  static removeTask(deletedTask) {
    return axios.delete(`http://localhost:5000/tasks/${deletedTask.payload.id}`);
  }
  
  static fetchTask() {
    return axios.get('http://localhost:5000/tasks');
  }
}