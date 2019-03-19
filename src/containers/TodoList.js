import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import TodoList from '../components/TodoList'
import LoaderHOC from '../HOC/loader'
import ButtonHOC from '../HOC/button'
import { displayTodoListRequest, displayTodoListRemove } from '../actions/displayTodoList'

class TodoListContainer extends Component {
  state = {
    query: ''
  }
  
  componentDidMount() {
		const { getLists } = this.props
		getLists();
	}

  updateQuery = event => {
		const query = event.target.value
  	this.setState({ query: query.trim() })
  }

	deleteTodo = task => {
		const { remove } = this.props
		remove(task)
  }
  
  generateVisibleTasks = (lists) => {
		const { query } = this.state
		let showingTasks = []
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingTasks = lists.filter((task) => match.test(task.taskName))
		} else {
			showingTasks = lists
		}
		return showingTasks
	} 

  render() {
    const { isPending, todoLists } = this.props.displayToDoListStates    
    const showingTasks = this.generateVisibleTasks(todoLists)

    return(
      <div id='list-container'>
        <ButtonHOC 
          to='/create' 
          component={Link}
          buttonText='Add Task'
          variant='outlined'
          className='filter-task'
        />

        {
          !isPending
          ? <TodoList 
              lists={ showingTasks } 
              state={ this.state }
              updateQuery={ this.updateQuery }
              deleteTodo={ this.deleteTodo }
            />
          : <LoaderHOC />
        }
      </div>
    )
  }
}

const mapStateToProps = (states) => ({ displayToDoListStates : states.displayTodoList })

const mapDispatchToProps = (dispatch) => ({
	getLists : () => dispatch(displayTodoListRequest()),
	remove: (task) => dispatch(displayTodoListRemove(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)