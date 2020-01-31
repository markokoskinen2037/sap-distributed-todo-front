import './App.css';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Axios from "axios"
import { basePath, getConfig } from "./util"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      todos: []
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
      this.setLoggedIn(true)
      this.fetchTodos()
    }
  }

  setLoggedIn(hasLoggedIn) {
    this.setState({
      loggedIn: hasLoggedIn
    })
    this.fetchTodos()
  }

  logout() {
    this.setState({
      loggedIn: false,
      todos: []
    })
    localStorage.removeItem("user")
  }

  fetchTodos() {
    console.log("Fetching todos again...")
    Axios.get(`${basePath}/todos`, getConfig())
      .then(res => this.setState({
        todos: res.data
      }))
  }



  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <TodoForm fetchTodos={this.fetchTodos.bind(this)} />
          <TodoList todos={this.state.todos} />
          <button id="logout" type="button" onClick={() => this.logout()}>Logout</button>
        </div>
      )
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Login</h1>
          <LoginForm setLoggedIn={this.setLoggedIn.bind(this)} />
          <h1>Sign up</h1>
          <SignUpForm setLoggedIn={this.setLoggedIn.bind(this)} />
        </div>
      )
    }
  }
}
