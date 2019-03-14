import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'

class TodoList extends Component {
	state = {
    query: ''
	}

	updateQuery = (event) => {
		const query = event.target.value;
    this.setState({ query: query.trim() })
  }

	deleteTodo = e => {
		const { param } = e.target.dataset;
		const task = JSON.parse(param).task
		const { remove } = this.props;
		remove(task);	
	}

	generateVisibleTasks = () => {
		const { query } = this.state;
		const { lists } = this.props;
		let showingTasks = [];
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingTasks = lists.filter((task) => match.test(task.taskName))
		} else {
			showingTasks = lists
		}
		return showingTasks;
	}

	render() {
		const { query } = this.state;
		const showingTasks = this.generateVisibleTasks();

		return(
			<div>
				<Link
          to='/create'
          className='add-task'
        >Add Task</Link>
				<input
          className='search-tasks'
          type='text'
          placeholder='Search Tasks'
          value={query}
          onChange={this.updateQuery}
        />
				<ol className='task-list'>
					{showingTasks.map((task) => (
						<li key={task.id} className='task-list-item'>
							<div className='task-details'>
								<p>{task.taskName}</p>
							</div>
							<button data-param={JSON.stringify({task})} onClick = {this.deleteTodo} className='task-remove'>
								Remove
							</button>
						</li>
					))}
				</ol>
			</div>
		)
	}
}

export default TodoList;