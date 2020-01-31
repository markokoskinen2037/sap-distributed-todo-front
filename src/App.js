import './App.css';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user && user.token) {
      this.setLoggedIn(true)
    }
  }

  setLoggedIn(hasLoggedIn) {
    this.setState({
      loggedIn: hasLoggedIn
    })
  }

  logout() {
    this.setLoggedIn(false)
    localStorage.removeItem("user")
  }


  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <div>Welcome, here u can add todos</div>
          <button type="button" onClick={() => this.logout()}>Logout</button>
        </div>
      )
    } else {
      return (
        <div style={{ textAlign: "center" }}>
          <h1>Login</h1>
          <LoginForm setLoggedIn={this.setLoggedIn.bind(this)} />
          <h1>Sign up</h1>
          <SignUpForm />
        </div>
      )
    }
  }
}
