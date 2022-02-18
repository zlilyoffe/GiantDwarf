import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class MyPage extends Component {
  constructor() {
    super();

    this.state = {
      groupCode: '',
      loginErrors: '',
    };
    this.changeGroupCode = this.changeGroupCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeGroupCode(event) {
    this.setState({
      groupCode: event.target.value,
    });
  }
  async onSubmit(event) {
    event.preventDefault();

    const registered = {
      groupCode: this.state.groupCode,
    };
    console.log(registered);
    var newGroupResult = {};
    const response = await axios.post(
      'http://localhost:4000/api/MyPage', registered);
      newGroupResult = response.data;
    if (newGroupResult.groupExists === true) {
      console.log(response.data);
      console.log('blabala');
    } else {
      console.log(response.data);
      // window.location = '/MyPage';
    }
  }
  // uc8z3
  render() {
    return (
      <div>
        <div className="myPageOuterContainer">
          <div className="myPageInnerContainer">
            <h1 className="heading3">My groups</h1>
            <Link to={`/Play`}>
              <button type="submit">
                group 1
              </button>
            </Link>
            <Link to={`/Play`}>
              <button type="submit">
                group 2
              </button>
            </Link>
          </div>
          <div>
            <h2 className="createNewGroup">Create New Group</h2>
            <Link to={`/CreateNewGroup`}>
              <button type="submit">
                Create new group
              </button>
            </Link>
          </div>
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Enter link to join group"
                onChange={this.changeGroupCode}
                value={this.state.groupCode}
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
