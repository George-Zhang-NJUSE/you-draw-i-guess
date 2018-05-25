import * as React from 'react';
import { Route, withRouter, } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';
import { Room } from './Room';
import { Redirector } from './Redirector';
import { connect } from 'react-redux';
import { User } from '../constant/constant';
import { UserState } from '../store/user';
// import logo from './logo.svg';

type DispatchProps = {
  requestLogin: (userData: Partial<User>) => void
};

class AppComponent extends React.Component<DispatchProps> {

  componentDidMount() {
    // 恢复登录状态
    const storage = localStorage.getItem('user');
    const userData: UserState = storage && JSON.parse(storage);
    if (userData) {
      this.props.requestLogin(userData);
    }
  }

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

const mapDispatch = (dispatch: any): DispatchProps => ({
  requestLogin: dispatch.user.requestLogin
});

export const App = withRouter(connect<{}, DispatchProps>(undefined, mapDispatch)(AppComponent) as any);