import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useStore } from '../../helpers/useStore';

const MyGiant = () => {
  const store = useStore();
  const [giant, setGiant] = useState('');
  React.useEffect(() => {
    (async () => {
      const response = await axios.post('http://localhost:4000/api/myGiant', {
        groupId: store.currentGroupId,
      });
      console.log(response.data);
      console.log(store.currentGroupId);
      setGiant(response.data.giant);
    })();
  }, []);
  return (
    <div className="yourGiantOuterContainer">
      <div className="yourGiantInnerContainer">
        <h1 className="heading">countdown begun</h1>
        <div>your giant is:{giant}</div>
        <div> her address::</div>
        <div>general:</div>
        <h2>Have Fun!!</h2>
      </div>
    </div>
  );
};

export default observer(MyGiant);
