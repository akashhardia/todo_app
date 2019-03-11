import React, { Component } from 'react';
import './App.css';
import ListTasks from './ListTasks.js';
import CreateTask from './CreateTask.js';
import { Route } from 'react-router-dom'
import axios from "axios";

class App extends Component {
  state = {
    tasks: []
  }

  deleteTask = async (deletedTask) => {
    await axios.delete(`http://localhost:5000/tasks/${deletedTask.id}`);
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => task.id !== deletedTask.id)
    }));
  }

  createTask = async (task) => {
    const newTask = await axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      data: {
        "taskName": task
      }
    })
    this.setState((state) => {
      tasks: state.tasks.push(newTask.data)
    },
    () => {
      this.forceUpdate();
    })
  }

  async componentDidMount() {
    const tasks = await axios.get('http://localhost:5000/tasks');
    this.setState({
      tasks: tasks.data
    });
  }

  render() {
    return(
      <div id='app'>
        <h1>React TODO</h1>
        <Route exact path='/' render={() => (
          <ListTasks
            onDeleteTask={ this.deleteTask }
            tasks = { this.state.tasks }
          />
        )}/>
        <Route path='/create' render={({ history }) => (
          <CreateTask onCreateTask = { this.createTask }/>
        )}/>
      </div>
    );
  }
}

export default App;
