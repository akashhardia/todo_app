import React, {Component} from 'react';
import { addTodoRequest, addTodoSuccess, addTodoFailure } from '../actions/addTodo';
import { connect } from 'react-redux';
import { createTaskInDb } from '../utils/util'
import { Link } from 'react-router-dom'

class AddTodo extends Component {
	createTask = async (task) => {
		const { request, success, failure } = this.props;
		request();
		try {
			const createdTask = await createTaskInDb(task);
			success(createdTask);
		} catch(err) {
			failure(err);
		}
  }

	handleSubmit = (event) => {
    event.preventDefault();
		const formValue = event.target.taskName.value;
    this.createTask(formValue);
  }

	render() {
		return(
			<div>
				<Link className='close-create-task' to='/'>Close</Link>
				<form className='create-contact-form' onSubmit={ this.handleSubmit }>
          <div className='create-contact-details'>
            <input className='create-contact-input' type='text' name='taskName' required="required" pattern="^[^-\s][a-zA-Z0-9_\s-]+$" placeholder='Add a Task'/>
            <button className='create-contact-submit' type="submit" >Add</button>
          </div>
        </form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	request : () => dispatch(addTodoRequest()),
	success : (todoLists) => dispatch(addTodoSuccess(todoLists)),
	failure : (msg) => dispatch(addTodoFailure(msg))
})

export default connect(null, mapDispatchToProps)(AddTodo);