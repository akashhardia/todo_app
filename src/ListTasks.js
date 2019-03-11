import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class ListTasks extends Component {

	state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

	render() {
		const {
			tasks,
			onDeleteTask
		} = this.props;

		const { query } = this.state;

		let showingTasks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingTasks = tasks.filter((task) => match.test(task.taskName))
    } else {
      showingTasks = tasks
    }

		return(
			<div>
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
              <button onClick = { () => onDeleteTask(task) } className='task-remove'>
                Remove
              </button>
            </li>
          ))}
        </ol>
			</div>
		)
	}
}

export default ListTasks;