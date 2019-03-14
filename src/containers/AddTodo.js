import React, { Component, Fragment } from 'react';
import { addTodoRequest } from '../actions/addTodo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class AddTodo extends Component {
	createTask = (task) => {
		const { request } = this.props;
		request(task);		
  }

	handleSubmit = (event) => {
    event.preventDefault();
		const formValue = event.target.taskName.value;
    this.createTask(formValue);
  }

	render() {		
		return(
			<Fragment>
				<Link className='close-create-task' to='/'>Close</Link>
				<form className='create-contact-form' onSubmit={ this.handleSubmit }>
          <div className='create-contact-details'>
						<input 
							className='create-contact-input' 
							type='text' 
							name='taskName' 
							required="required" 
							pattern="^[^-\s][a-zA-Z0-9_\s-]+$" 
							placeholder='Add a Task'/>
            <button className='create-contact-submit' type="submit" >Add</button>
          </div>
        </form>
			</Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	request : (task) => dispatch(addTodoRequest(task))
})

export default connect(null, mapDispatchToProps)(AddTodo);