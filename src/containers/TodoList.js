import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList.js';
import { displayTodoListRequest, displayTodoListRemove } from '../actions/displayTodoList';
import LinearProgress from '@material-ui/core/LinearProgress';

class ToDoListContainer extends Component {

	async componentDidMount() {
		const { getLists } = this.props;		
		getLists();
	}
	
	render() {
		const { isPending, todoLists } = this.props.displayToDoListStates;
		const { remove } = this.props;

		return (
			<Fragment>
				{
					!isPending
					? <TodoList lists = { todoLists } remove = { remove }/>
					: <div className='loader'>
							<LinearProgress />
							<br />
							<LinearProgress color="secondary" />
						</div>
				}
			</Fragment>
		)
	}	
}

const mapStateToProps = (states) => ({ displayToDoListStates : states.displayTodoList })

const mapDispatchToProps = (dispatch) => ({
	getLists : () => dispatch(displayTodoListRequest()),
	remove: (task) => dispatch(displayTodoListRemove(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoListContainer);