import React from 'react';
import axios from 'axios';
import { basePath } from "./util.js"

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios
      .post(`${basePath}/users/register`, user)
      .then(response => {
        alert("Hi " + response.data.username + "!")
      })
      .catch(error => {
        alert('Sign up not succesful')
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username:
          </label>
          <br />
          <input type="text" value={this.state.name} onChange={this.handleUsername} />
        </div>
        <div>
          <label>
            Password:
          </label>
          <br />
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default SignUpForm