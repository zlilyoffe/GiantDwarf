import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function MyPage() {
  const [groupCode, setGroupCode] = useState('');
  const changeGroupCode = (e) => {
    setGroupCode(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const registered = {
      groupCode: groupCode,
    };
    console.log(registered);
    var newGroupResult = {};
    const response = await axios.post(
      'http://localhost:4000/api/MyPage',
      registered
    );
    newGroupResult = response.data;
    if (newGroupResult.groupExists === true) {
      console.log(response.data);
      console.log('blabala');
    } else {
      console.log('oppsss');
      // window.location = '/MyPage';
    }
    // uc8z3
    return (
      <div>
        <div className="myPageOuterContainer">
          <div className="myPageInnerContainer">
            <h1 className="heading3">My groups</h1>
            <Link to={`/Play`}>
              <button type="submit">{response.data.name}</button>
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
  };
}

export default MyPage;
