import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import TodoListContainer from './containers/TodoList'
import AddTodoContainer from './containers/AddTodo'
import AppBarHOC from './HOC/appBar'

class App extends Component {
  render() {

    return (
      <Fragment>				
				<AppBarHOC 
					position='static'
					appBarText='React TODO'
					color='default'
				/>
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