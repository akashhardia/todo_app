import React, { Component, Fragment } from 'react';
import { addTodoRequest } from '../actions/addTodo';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class AddTodo extends Component {
	state = {
		error: false,
		query: ''
	}

	createTask = (task) => {
		const { request } = this.props;
		request(task);
	}
	
	updateQuery = (event) => {
		const query = event.target.value;
    this.setState({ query: query })
  }

	handleSubmit = (event) => {
		event.preventDefault();
		const formValue = event.target.taskName.value.trim();
		if(!formValue)
			this.setState({ error: true })
		else {
			this.createTask(formValue);
			this.setState({ error: false, query: '' })
		}			
  }

	render() {
		const { classes } = this.props;

		return(
			<Fragment>
				<Link className = 'close-create-task' to = '/'>Close</Link>
				<form className = 'create-contact-form' id = 'myform' onSubmit = { this.handleSubmit }>
          <div className = 'create-contact-details'>
						<Input
							className={classes.input}
							required = { true }
							type = 'text'
							placeholder = 'Add new Task'
							name = 'taskName'
							onChange = { this.updateQuery }
							error = { this.state.error }
							value = { this.state.query }
						></Input>
						<Button 
							variant = 'contained'
							color = 'primary'
							className = { classes.button }
							type = 'submit'
        			form = 'myform'
						>Add</Button>
          </div>
        </form>
			</Fragment>
		)
	}
}

const styles = {
	input: 'create-contact-input',
	button: 'create-contact-submit'
}

const mapDispatchToProps = (dispatch) => ({
	request: (task) => dispatch(addTodoRequest(task)),
	classes: styles
})

export default connect(null, mapDispatchToProps)(AddTodo);