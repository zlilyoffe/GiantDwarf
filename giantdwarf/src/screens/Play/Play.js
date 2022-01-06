import React from 'react';
import { Link } from 'react-router-dom';

const Play = () => {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">group name</h1>
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

export default Play;
