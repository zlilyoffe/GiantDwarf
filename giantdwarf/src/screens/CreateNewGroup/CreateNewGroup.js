import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class CreateNewGroup extends Component {
  constructor() {
    super();
    this.state = {
      groupName: '',
      numberOfParticipants: '',
    };
    this.changeGroupName = this.changeGroupName.bind(this);
    this.changeNumberOfParticipants =
      this.changeNumberOfParticipants.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeGroupName(event) {
    this.setState({
      groupName: event.target.value,
    });
  }
  changeNumberOfParticipants(event) {
    this.setState({
      numberOfParticipants: event.target.value,
    });
  }
  async onSubmit(event) {
    event.preventDefault();

    const registered = {
      groupName: this.state.groupName,
      numberOfParticipants: this.state.numberOfParticipants,
      code: this.state.code,
    };
    var codeResult = {};
    const response = await axios.post(
      'http://localhost:4000/api/CreateNewGroup',
      registered
    );
    codeResult = response.data;
    // axios.post('http://localhost:4000/api/CreateNewGroup', registered);
    // window.location = '/LinkPage';
    this.setState({
      groupName: '',
      numberOfParticipants: '',
    });
    console.log(codeResult.code);
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <h1 className="heading">Create Group</h1>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Group name"
                onChange={this.changeGroupName}
                value={this.state.groupName}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Number of participants"
                onChange={this.changeNumberOfParticipants}
                value={this.state.numberOfParticipants}
                className="form-control form-group"
              />
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="create"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewGroup;
