import React from 'react';
import { Link } from 'react-router-dom';
import './JoinGame.css';
import logo from './logo.png';

const JoinGame = () => {
  return (
    <div className="bigblue">
      <div className="joinInnerContainer">
        <h1 className="heading">Giant | Dwarf</h1>
        <img src={logo} alt="Logo" />
        <Link to={`/GeneralInformation`}>
          <button className='buttomUp' type="submit">
            Sign up
          </button>
        </Link>
        <Link to={`/SignIn`}>
          <button className='buttomIn' type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinGame;
