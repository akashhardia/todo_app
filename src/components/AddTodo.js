import React, { Component } from 'react'
import TextFieldHOC from '../HOC/inputText'
import ButtonHOC from '../HOC/button'

class AddTodo extends Component {
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
			this.props.create(formValue);
			this.setState({ error: false, query: '' })
		}			
  }
  
  render() {
    const { query, error } = this.state
    const { classes } = this.props

    return(
      <form className = 'create-contact-form' id = 'myform' onSubmit = { this.handleSubmit }>
        <TextFieldHOC 
          required={ true }
          type='text'
          query={ query }
          placeholder='Add new Task'
          error = { error }
          onChange = { this.updateQuery }
          name='taskName'
        />

        <ButtonHOC 
          variant='contained'
          color='primary'
          className={ classes.button }
          type='submit'
          form='myform'
          buttonText='Submit'
        />
      </form>
    )
  }
}

export default AddTodo