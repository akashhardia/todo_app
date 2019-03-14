import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';
import { displayTodoListRequest, displayTodoListRemove } from '../actions/displayTodoList';

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
		const { getLists } = this.props;		
		getLists();
	}
}

const mapStateToProps = (states) => ({ displayToDoListStates : states.displayTodoList})

const mapDispatchToProps = (dispatch) => ({
	getLists : () => dispatch(displayTodoListRequest()),
	remove: (task) => dispatch(displayTodoListRemove(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);