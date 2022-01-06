import React from 'react';
import { Link } from 'react-router-dom';

const GeneralInformation = () => {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Group created successfully!!!</h1>
        <div>your group link:</div>
        <Link to={`/MyPage`}>
          <button className={'button mt-20'} type="submit">
            home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GeneralInformation;
