import React, { Component } from 'react'

import TextFieldHOC from '../HOC/inputText'
import ListHOC from '../HOC/list'

class TodoList extends Component {

	render() {
		const {
			state, updateQuery, deleteTodo, lists
		} = this.props
		const { query } = state

		return(
			<div className='search-task-container'>
				<TextFieldHOC
          className='search-tasks'
          type='text'
          placeholder='Filter Results'
          value = { query }
          onChange={ updateQuery }
        />

        <ListHOC 
          list={ lists }
          onDelete={ deleteTodo }
        />
			</div>
		)
	}
}

export default TodoList