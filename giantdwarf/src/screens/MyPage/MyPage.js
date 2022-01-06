import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class MyPage extends Component {
  constructor() {
    super();

    this.state = {
      enter: '',
      loginErrors: '',
    };
    this.changeEnter = this.changeEnter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeEnter(event) {
    this.setState({
      Enter: event.target.value,
    });
  }
  async onSubmit(event) {
    event.preventDefault();

    const registered = {
      enter: this.state.enter,
    };
    axios.post('http://localhost:4000/api/MyPage', registered);

    window.location = '/SignIn';
  }

  render() {
    return (
      <div>
        <div className="myPageOuterContainer">
          <div className="myPageInnerContainer">
            <h1 className="heading">My groups</h1>
            <Link to={`/Play`}>
              <button className={'button mt-20'} type="submit">
                group 1
              </button>
            </Link>
            <Link to={`/Play`}>
              <button className={'button mt-40'} type="submit">
                group 2
              </button>
            </Link>
          </div>
          <div>
            <h2 className="createNewGroup">Create New Group</h2>
            <Link to={`/CreateNewGroup`}>
              <button className={'button mt-20'} type="submit">
                Create new group
              </button>
            </Link>
          </div>
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Enter link to join group"
                onChange={this.changeEnter}
                value={this.state.enter}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="join"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPage;
