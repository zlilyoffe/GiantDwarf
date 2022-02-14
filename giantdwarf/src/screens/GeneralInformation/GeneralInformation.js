import React from "react";
import { Link } from "react-router-dom";
import './GeneralInformation.css';
 


const GeneralInformation = () => {

  return (
    <div className="generalOuterContainer">
      <div className="generalInnerContainer">
        <h1 className="heading2">General <br></br> Information.</h1>
        <div className="generalText">
            All you have to do is sign up and join a group  (or create one).
            With the help of the app, you will get all the details you need about your giant!
            soooo let’s begin!
        </div>
        <Link to={`/SignUp`}>
          <button className={'button'} type="submit">lets begin</button>
        </Link>
      </div>
    </div>
  );
}

export default GeneralInformation;