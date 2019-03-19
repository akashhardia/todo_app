import {
  LIST_TODO_SUCCESS,
  LIST_TODO_FAILURE,
  LIST_TODO_REMOVE,
  LIST_TODO_REQUEST
} from '../actions/action_types'

const defaultState = {
  todoLists: [],
  inPending: false,
  error: ''
}

function displayTodoList(state = defaultState, action) {
  switch (action.type) {
    case LIST_TODO_REQUEST:
    	return {
        ...state,
        inPending: true
      }

	  case LIST_TODO_SUCCESS:
    	return {
        ...state,
        todoLists: action.payload,
        inPending: false
      }

    case LIST_TODO_FAILURE:
    	return {
        ...state,
        inPending: false,
        error: action.payload
      }

    case LIST_TODO_REMOVE:
      return {
        todoLists: state.todoLists.filter(item => (item.id !== action.payload.id))
      }

    default:
      return state
  }
}

export default displayTodoList