import React, { Component } from 'react';

class CreateTask extends Component {
	handleSubmit = (event) => {
    event.preventDefault();
    const formValue = event.target.taskName.value;
    if (this.props.onCreateTask)
      this.props.onCreateTask(formValue);
  }

	render() {
    return (
      <div>
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

export default CreateTask;