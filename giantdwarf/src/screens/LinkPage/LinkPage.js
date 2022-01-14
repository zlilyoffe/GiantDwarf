import React from 'react';
import { Link } from 'react-router-dom';

const LinkPage = () => {
  const x = Math.random()
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Group created successfully!!!</h1>
        <h2>your group link:{x}</h2>
        <Link to={`/MyPage`}>
          <button className={'button mt-20'} type="submit">
            lets begin
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LinkPage;
