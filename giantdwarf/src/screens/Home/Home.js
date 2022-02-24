import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useStore } from '../../helpers/useStore';
import { observer } from 'mobx-react-lite';

const Home = () => {
  const store = useStore();
  const [groupCode, setGroupCode] = useState('');
  const [name, setName] = useState('');
  const storeGroupName = useStore();
  console.log('try', store.currentUserId);
  
  const changeGroupCode = (e) => {
    setGroupCode(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:4000/api/Home', {
      groupCode, userId: store.currentUserId,
    });
    setName(response.data.name);
    const groupName = response.data.name;
    if (groupName) {
      storeGroupName.setGroupName(groupName);
      console.log(groupName);
    } else {
      console.log('oppsss');
    }
  };
  return (
    <div>
      <div className="myPageOuterContainer">
        <div className="myPageInnerContainer">
          <h1 className="heading3">My groups</h1>
          <Link to={`/Play`}>
            <button type="submit">{name}</button>
          </Link>
          <Link to={`/Play`}>
            <button type="submit">group 2</button>
          </Link>
        </div>
        <div>
          <h2 className="createNewGroup">Create New Group</h2>
          <Link to={`/CreateNewGroup`}>
            <button type="submit">Create new group</button>
          </Link>
        </div>
        <div>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter link to join group"
              onChange={changeGroupCode}
              value={groupCode}
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

// uc8z3

export default observer(Home);
