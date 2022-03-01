import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinGame from './screens/JoinGame/JoinGame';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';
import CreateNewGroup from './screens/CreateNewGroup/CreateNewGroup';
import LinkPage from './screens/LinkPage/LinkPage';
import Play from './screens/Play/Play';
import YourGiant from './screens/YourGiant/YourGiant';
import GeneralInformation from './screens/GeneralInformation/GeneralInformation';
import Home from './screens/Home/Home';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={JoinGame} />
      <Route path="/SignIn" component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Home" component={Home} />
      <Route path="/CreateNewGroup" component={CreateNewGroup} />
      <Route path="/LinkPage" component={LinkPage} />
      <Route path="/Play" component={Play} />
      <Route path="/YourGiant" component={YourGiant} />
      <Route path="/GeneralInformation" component={GeneralInformation} />
    </Router>
  );
};

export default App;
