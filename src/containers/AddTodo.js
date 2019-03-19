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
        <AddTodo classes={ classes } create={ request }/>
      </div>      
    )
  }
}

const styles = {
	input: 'create-todo-input',
	button: 'create-todo-button'
}

const mapDispatchToProps = (dispatch) => ({
  request: (task) => dispatch(addTodoRequest(task)),
  classes: styles  
})

export default connect(null, mapDispatchToProps)(AddTodoContainer);