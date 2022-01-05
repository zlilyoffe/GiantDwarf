import React from "react";
import { Link } from "react-router-dom";



const JoinGame = () => {

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Giant | Dwarf</h1>
        <Link to={`/GeneralInformation`}>
          <button className={'button mt-20'} type="submit">Sign up</button>
        </Link>
        <Link to={`/SignIn`}>
          <button className={'button mt-40'} type="submit">Sign in</button>
        </Link>
      </div>
    </div>
  );
}

export default JoinGame;