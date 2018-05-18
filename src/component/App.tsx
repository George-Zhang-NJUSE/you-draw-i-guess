import * as React from 'react';
import { Route,  } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';
import { Room } from './Room';
import { Redirector } from './Redirector';
// import logo from './logo.svg';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Route component={Redirector} />
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/room" component={Room} />
      </div>
    );
  }
}