import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../helpers/useStore';

const LinkPage = () => {
  const store = useStore();
  const [codeResult, setCodeResult] = useState('');
  React.useEffect(() => {
    (async () => {
      const response = await axios.post('http://localhost:4000/api/LinkPage', {
        groupId: store.currentGroupId,
      });
      console.log(response.data);
      setCodeResult(response.data.codeResult);
    })();
  }, []);
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Group created successfully!!!</h1>
        <h2>your group link: {codeResult}</h2>
        <Link to={`/Home`}>
          <button type="submit">lets begin</button>
        </Link>
      </div>
    </div>
  );
};

export default observer(LinkPage);
