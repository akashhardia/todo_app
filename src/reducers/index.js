import { combineReducers } from 'redux'
import addTodolistReducer from './addTodo'
import displayTodoListReducer from './displayTodoList'

const rootReducer = combineReducers({
  addTodoList : addTodolistReducer,
  displayTodoList: displayTodoListReducer
})

export default rootReducer