import React, { Component } from 'react'
import TextFieldHOC from '../HOC/inputText'
import ButtonHOC from '../HOC/button'

class AddTodo extends Component {
  
  render() {
    const {
      state, classes, handleSubmit, updateQuery
    } = this.props
    const { query, error } = state

    return(
      <form className = { classes.form } id = 'myform' onSubmit = { handleSubmit }>
        <TextFieldHOC 
          required={ true }
          type='text'
          query={ query }
          placeholder='Add new Task'
          error = { error }
          onChange = { updateQuery }
          name='taskName'
          className={ classes.input }
        />

        <ButtonHOC 
          variant='outlined'
          color='primary'
          className={ classes.button }
          type='submit'
          form='myform'
          buttonText='Add'
        />
      </form>
    )
  }
}

export default AddTodo