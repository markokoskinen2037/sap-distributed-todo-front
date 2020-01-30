import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function App() {
  return (
    <header>
      <h1>Login</h1>
      <LoginForm/>
      <h1>Sign up</h1>
      <SignUpForm/>
    </header>
    
  );
}

export default App;
