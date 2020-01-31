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

  setLoggedIn(hasLoggedIn) {
    this.setState({
      loggedIn: hasLoggedIn
    })
  }


  render() {
    if (this.state.loggedIn) {
      return <div>Welcome, here u can add todos</div>
    } else {
      return (
        <div>
          <header>
            <h1>Login</h1>
            <LoginForm setLoggedIn={this.setLoggedIn.bind(this)} />
            <h1>Sign up</h1>
            <SignUpForm />
          </header >
        </div>
      )
    }
  }
}
