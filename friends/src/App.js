import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import FriendList from './components/FriendList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
        <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/friendlist">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path='/friendlist' component={FriendList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
