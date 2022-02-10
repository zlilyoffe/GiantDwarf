import React from 'react';
import { Link } from 'react-router-dom';
import './JoinGame.css';

const JoinGame = () => {
  return (
    <div className="bigblue">
      <div className="joinInnerContainer">
        <h1 className="heading">Giant | Dwarf</h1>
        <Link to={`/GeneralInformation`}>
          <button className={'button mt-20'} type="submit">
            Sign up
          </button>
        </Link>
        <Link to={`/SignIn`}>
          <button className={'button mt-40'} type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinGame;
