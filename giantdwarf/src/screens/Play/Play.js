import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useState, useEffect } from 'react';
import { useStore } from '../../helpers/useStore';
import { Link } from 'react-router-dom';

const Play = () => {
  const store = useStore();
  const [name, setName] = useState('');
  React.useEffect(() => {
    (async () => {
      const response = await axios.post('http://localhost:4000/api/Play', {
        groupId: store.currentGroupId,
      });
      setName(response.data.groupName);
    })();
  }, []);
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading"> group name: {name}</h1>
        <div>status</div>
        <Link to={`/YourGiant`}>
          <button className={'button mt-20'} type="submit">
            play
          </button>
        </Link>
        <div>When the game starts, the button will turn green</div>
      </div>
    </div>
  );
};

export default observer(Play);
