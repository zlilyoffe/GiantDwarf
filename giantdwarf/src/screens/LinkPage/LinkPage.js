import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../helpers/useStore';

const LinkPage = () => {
  const store = useStore();
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Group created successfully!!!</h1>
        <h2>your group link:{store.currentGroupId}</h2>
        <Link to={`/MyPage`}>
          <button className={'button mt-20'} type="submit">
            lets begin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default observer(LinkPage);
