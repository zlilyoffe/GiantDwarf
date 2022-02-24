import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useStore } from '../../helpers/useStore';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const storeId = useStore();
  const history = useHistory();
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const registered = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      'http://localhost:4000/api/SignIn',
      registered
    );
    const signInResult = response.data;
    const userId = signInResult.userId;
    console.log(signInResult.userId);
    if (signInResult.userExists === true && userId) {
      storeId.setCurrentUserId(userId);
      history.push('/Home');
      console.log('signin',signInResult.userId);
    } else {
      window.location = '/';
    }
  };
  return (
    <div>
      <div className="container">
        <div className="form-div">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="E-mail"
              onChange={changeEmail}
              value={email}
              className="form-control form-group"
            />
            <input
              type="text"
              placeholder="Password"
              onChange={changePassword}
              value={password}
              className="form-control form-group"
            />
            <input
              type="submit"
              className="btn btn-danger btn-block"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
