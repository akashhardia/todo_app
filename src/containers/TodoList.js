import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getTasksFromDb } from '../utils/util.js'
import TodoList from '../components/TodoList.js';
import { displayTodoListRequest, displayTodoListSuccess, displayTodoListFailure, displayTodoListRemove } from '../actions/displayTodoList';

class ToDoListContainer extends Component {

	render() {
		const { isPending, todoLists } = this.props.displayToDoListStates;
		const{ remove } = this.props;
		return (
			<Fragment>
				{
					!isPending
					? <TodoList lists={todoLists} remove = {remove}/>
					: <h1> loading.....</h1>
				}
			</Fragment>
		)
	}

	async componentDidMount() {
		const { getLists, success, failure} = this.props;
		getLists();
		try {
			const tasks = await getTasksFromDb();
			success(tasks);
		} catch(err) {
			failure('no task');
		}			
	}
}

const mapStateToProps = (states) => ({ displayToDoListStates : states.displayTodoList})

const mapDispatchToProps = (dispatch) => ({
	getLists : () => dispatch(displayTodoListRequest()),
	success : (todoLists) => dispatch(displayTodoListSuccess(todoLists)),
	failure : (msg) => dispatch(displayTodoListFailure(msg)),
	remove: (task) => dispatch(displayTodoListRemove(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);