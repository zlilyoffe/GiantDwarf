import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class CreateNewGroup extends Component {
  constructor() {
    super();
    this.state = {
      groupName: '',
      numberOfParticipantse: '',
    };
    this.changeGroupName = this.changeGroupName.bind(this);
    this.changenumberOfParticipants = this.changeNumberOfParticipantse.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeGroupName(event) {
    this.setState({
      groupName: event.target.value,
    });
  }
  changeNumberOfParticipantse(event) {
    this.setState({
      numberOfParticipants: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();

    const registered = {
      groupName: this.state.groupName,
      numberOfParticipants: this.state.numberOfParticipants,
    };
    axios.post('http://localhost:4000/api/CreateNewGroup', registered);
    window.location = '/LinkPage';
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <h1 className='heading'>Create Group</h1>
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
                onChange={this.changeNumberOfParticipantse}
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
