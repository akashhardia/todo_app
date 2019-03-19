import React, { Component, Fragment } from 'react'
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
      <Fragment>
        <Link className = 'close-create-task' to = '/'>
          <ButtonHOC buttonText='Close'/>
        </Link>
        <AddTodo classes={ classes } create={ request }/>
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

export default connect(null, mapDispatchToProps)(AddTodoContainer);