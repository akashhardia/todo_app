import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import { Link } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

class TodoList extends Component {
	state = {
    query: ''
	}

	updateQuery = event => {
		const query = event.target.value;
  	this.setState({ query: query.trim() })
  }

	deleteTodo = event => {
		console.log(event.target.parentNode);

		// const { remove } = this.props;
		// remove(task);
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
				<Input
					className='search-tasks'
					type='text'
					placeholder='Filter Results'
					value = { query }
					onChange={ this.updateQuery }
				></Input>			
				<List className='task-list'>
					{ showingTasks.map((task) => (
						<ListItem key = { task.id } className = 'task-list-item'>
							<ListItemText
								primary = { task.taskName }
							/>
							<button								
								onClick = { this.deleteTodo }
								className='task-remove'
							>
								Remove
						 	</button>
						</ListItem>
					)) }
				</List>
			</div>
		)
	}
}

export default TodoList;