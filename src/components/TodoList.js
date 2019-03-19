import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import TextFieldHOC from '../HOC/inputText'
import ListHOC from '../HOC/list'

class TodoList extends Component {
	state = {
    query: ''
	}

	updateQuery = event => {
		const query = event.target.value
  	this.setState({ query: query.trim() })
  }

	deleteTodo = task => {
		const { remove } = this.props
		remove(task)
	}

	generateVisibleTasks = () => {
		const { query } = this.state
		const { lists } = this.props
		let showingTasks = []
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingTasks = lists.filter((task) => match.test(task.taskName))
		} else {
			showingTasks = lists
		}
		return showingTasks
	}

	render() {
		const { query } = this.state
		const showingTasks = this.generateVisibleTasks()

		return(
			<div className='search-task-container'>
				<TextFieldHOC 
          className='search-tasks'
          type='text'
          placeholder='Filter Results'
          value = { query }
          onChange={ this.updateQuery }
        />

        <ListHOC 
          list={ showingTasks }
          onDelete={ this.deleteTodo }
        />
			</div>
		)
	}
}

export default TodoList