import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddTodo from '../components/AddTodo'
import ButtonHOC from '../HOC/button'
import { addTodoRequest } from '../actions/addTodo'

class AddTodoContainer extends Component {
  createTask = (task) => {
		const { request } = this.props;
		request(task);
  }

  state = {
		error: false,
		query: ''
  }
  
  updateQuery = event => {
		const query = event.target.value
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
    const { classes, request } = this.props;

    return(
      <div id='list-container'>        
        <ButtonHOC 
          buttonText='Close'
          to='/'
          component={ Link }
          variant='outlined'      
        />
        <AddTodo 
          classes={ classes } 
          create={ request }
          updateQuery={ this.updateQuery }
          state={this.state}
          handleSubmit={ this.handleSubmit }
        />
      </div>      
    )
  }
}

const styles = {
	input: 'create-todo-input',
  button: 'create-todo-button',
  form: 'create-todo-form'
}

const mapDispatchToProps = (dispatch) => ({
  request: (task) => dispatch(addTodoRequest(task)),
  classes: styles
})

export default connect(null, mapDispatchToProps)(AddTodoContainer);