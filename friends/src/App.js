import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
        <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/friendslist">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path='/friendslist' component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
