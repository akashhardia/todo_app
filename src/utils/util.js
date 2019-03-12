import axios from 'axios';

export async function deleteTaskInDb(deletedTask) {
	return await axios.delete(`http://localhost:5000/tasks/${deletedTask.id}`);
}

export async function getTasksFromDb() {
	const tasks = await axios.get('http://localhost:5000/tasks');
  return tasks.data;
}

export async function createTaskInDb(task) {
	return await axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      data: {
        "taskName": task
      }
    })
}