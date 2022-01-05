import React from "react";
import { Link } from "react-router-dom";


const GeneralInformation = () => {

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">General Information</h1>
        <div>
            All you have to do is sign up and join a group  (or create one).
            With the help of the app, you will get all the details you need about your giant!
            soooo let’s begin!
        </div>
        <Link to={`/SignUp`}>
          <button className={'button mt-20'} type="submit">lets begin</button>
        </Link>
      </div>
    </div>
  );
}

export default GeneralInformation;