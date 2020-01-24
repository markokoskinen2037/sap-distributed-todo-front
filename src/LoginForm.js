import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', password: ''};

    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Name: ' + this.state.name + '\nPassword: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleName} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handlePassword} />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default LoginForm