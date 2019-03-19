import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import TodoListContainer from './containers/TodoList'
import AddTodoContainer from './containers/AddTodo'

class App extends Component {
  render() {
    return (
      <Fragment>
				<h1>React TODO</h1>
				<BrowserRouter>
					<Fragment>
						<Route exact path="/" component={ TodoListContainer } />
						<Route path="/create" component={ AddTodoContainer } />
					</Fragment>
				</BrowserRouter>
			</Fragment>
    )
  }
}

export default App
