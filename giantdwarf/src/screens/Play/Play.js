import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../helpers/useStore';
import { Link } from 'react-router-dom';
import { set } from 'mongoose';
import { useHistory } from 'react-router-dom';

const Play = () => {
  const store = useStore();
  const history = useHistory();
  const [name, setName] = useState('');
  const [participants, setParticipants] = useState('');
  const [numberOfParticipants, setNumberOfParticipants] = useState('');
  React.useEffect(() => {
    (async () => {
      const response = await axios.post('http://localhost:4000/api/Play', {
        groupId: store.currentGroupId,
      });
      console.log(store.currentGroupId);
      setName(response.data.groupName);
      setParticipants(response.data.participants);
      setNumberOfParticipants(response.data.numberOfParticipants);
    })();
  }, []);
  console.log('participants', participants.length);
  console.log('numberOf', numberOfParticipants);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (numberOfParticipants <= participants.length) {
      history.push('/MyGiant');
    } else {
      window.location = '/';
    }
  };
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <form onSubmit={onSubmit}>
          <h1 className="heading"> group name: {name}</h1>
          <div>status</div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="play"
          />
          <div>When the game starts, the button will turn green</div>
        </form>
      </div>
    </div>
  );
};

export default observer(Play);
