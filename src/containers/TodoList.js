import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TodoList from '../components/TodoList'
import LoaderHOC from '../HOC/loader'
import ButtonHOC from '../HOC/button'
import { displayTodoListRequest, displayTodoListRemove } from '../actions/displayTodoList'

class TodoListContainer extends Component {

  componentDidMount() {
		const { getLists } = this.props
		getLists();
	}

  render() {
    const { isPending, todoLists } = this.props.displayToDoListStates
		const { remove } = this.props

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
          ? <TodoList lists={ todoLists } remove={ remove }/>
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