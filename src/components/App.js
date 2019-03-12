import React, { Component, Fragment } from 'react';
import AddTodo from '../containers/AddTodo'
import ToDoListContainer from '../containers/TodoList'
import '../App.css'
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return(
			<Fragment>
				<h1>React TODO</h1>
				<BrowserRouter>
					<Fragment>
						<Route exact path="/" component={ToDoListContainer} />
						<Route path="/create" component={AddTodo} />
					</Fragment>
				</BrowserRouter>
			</Fragment>
		)
	}
}

export default App;