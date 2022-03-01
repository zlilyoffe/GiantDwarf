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
  const [groupNames, setGroupNames] = useState('');
  const storeGroupName = useStore();
  console.log('try', store.currentUserId);

  React.useEffect(() => {
    (async () => {
      const groupsResponse = await axios.post(
        'http://localhost:4000/api/getUserGroups',
        {
          userId: store.currentUserId,
        }
      );
      console.log('mygroups', groupsResponse.data.groupNames);
      setGroupNames(groupsResponse.data.groupNames);
    })();
  }, []);
  const changeGroupCode = (e) => {
    setGroupCode(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('http://localhost:4000/api/Home', {
      groupCode,
      userId: store.currentUserId,
    });
    setName(response.data.name);
    const groupName = response.data.name;
    if (groupName) {
      storeGroupName.setGroupName(groupName);
      console.log(groupName);
    } else {
      console.log('oppsss');
    }
    console.log('groupNames', groupNames);
  };
  return (
    <div>
      {/* {
        <ol>
          {groupNames.map((newGroupName) => (
            <li key={newGroupName}>{newGroupName}</li>
          ))}
        </ol>
      } */}
      <div className="myPageOuterContainer">
        <div className="myPageInnerContainer">
          <h1 className="heading3">My groups</h1>
          <Link to={`/Play`}>
            <button type="submit">{name}</button>
          </Link>
          {
            <Link to={`/Play`}>
              <button type="submit">{groupNames}</button>
            </Link>
          }
          {/* <ol>
            {groupNames.map((newGroupName) => (
              <li key={newGroupName}>{newGroupName}</li>
            ))}
          </ol> */}
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

export default observer(Home);

{
  /* <Link to={`/Play`}>
            <button type="submit">{groupNames}</button>
          </Link> */
}

{
  /* <ol>
{groupNames.map((newGroupName) => (
  <li key={newGroupName}>{newGroupName}</li>
))}
</ol> */
}
