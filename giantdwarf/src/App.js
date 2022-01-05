import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinGame from './screens/JoinGame/JoinGame';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import MyPage from './screens/MyPage/MyPage';
import GeneralInformation from './screens/GeneralInformation/GeneralInformation';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinGame} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/MyPage" component={MyPage} />
      <Route path="/GeneralInformation" component={GeneralInformation} />
    </Router>
  );
};

export default App;
