import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE
} from '../actions/action_types';

const defaultState = {
  data: {},
  inPending: false,
  error: ''
}

function addToDo(state = defaultState, action) {
  switch (action.type) {
    case ADD_TODO_REQUEST:
    	return {
        ...state,
        inPending: true
      }

	  case ADD_TODO_SUCCESS:
    	return {
        ...state,
        data: action.payload,
        inPending: false
      }

    case ADD_TODO_FAILURE:
    	return {
        ...state,
        inPending: false,
        error: action.payload
      }

    default:
      return state
  }
}

export default addToDo;