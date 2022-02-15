import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useStore } from '../../helpers/useStore';
import { useHistory } from 'react-router-dom';

function CreateNewGroup() {
  const [groupName, setGroupName] = useState('');
  const [numberOfParticipants, setNumberOfParticipants] = useState('');
  const [code, setCode] = useState('');
  const storeId = useStore();
  const history = useHistory();
  const changeGroupName = (e) => {
    setGroupName(e.target.value);
  };
  const changeNumberOfParticipants = (e) => {
    setNumberOfParticipants(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const registered = {
      groupName: groupName,
      numberOfParticipants: numberOfParticipants,
      code: code,
    };
    let groupId = {};
    const response = await axios.post(
      'http://localhost:4000/api/CreateNewGroup',
      registered
    );
    groupId = response.data.id;
    if (groupId) {
      storeId.setCurrentGroupId(groupId);
      history.push('/LinkPage');
    } else {
      setGroupName('');
      setNumberOfParticipants('');
    }
  };
  return (
    <div>
      <div className="container">
        <div className="form-div">
          <h1 className="heading">Create Group</h1>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Group name"
              onChange={changeGroupName}
              value={groupName}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Number of participants"
              onChange={changeNumberOfParticipants}
              value={numberOfParticipants}
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

export default CreateNewGroup;
