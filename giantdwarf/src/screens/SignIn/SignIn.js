import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  async onSubmit(event) {
    event.preventDefault();

    const registered = {
      email: this.state.email,
      password: this.state.password,
    };
    var signInResult = {};
    const response = await axios.post(
      'http://localhost:4000/api/SignIn',
      registered
    );
    signInResult = response.data;
       if (signInResult.userExists === true) {
      // history.push('/Home');
      // window.location = '/Home';
      console.log('signInRESSSSS', response);
    } else {
      window.location = '/';
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="E-mail"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
