import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Username: ' + this.state.username + '\nPassword: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username:
          </label>
          <br/>
          <input type="text" value={this.state.name} onChange={this.handleUsername} />
        </div>
        <div>
          <label>
            Password:
          </label>
          <br/>
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