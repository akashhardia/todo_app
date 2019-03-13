import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'

class TodoList extends Component {
	state = {
    query: ''
	}
	
	updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

	deleteTodo = async (task) => {
		const { remove } = this.props;
		remove(task);	
	}

	render() {
		const { query } = this.state;
		const { lists } = this.props;
		let showingTasks = [];
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingTasks = lists.filter((task) => match.test(task.taskName))
		} else {
			showingTasks = lists
		}
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
          onChange={(event) => this.updateQuery(event.target.value)}
        />
				<ol className='task-list'>
					{showingTasks.map((task) => (
						<li key={task.id} className='task-list-item'>
							<div className='task-details'>
								<p>{task.taskName}</p>
							</div>
							<button onClick = { () => {this.deleteTodo(task)} } className='task-remove'>
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