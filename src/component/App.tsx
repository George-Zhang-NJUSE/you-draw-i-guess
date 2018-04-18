import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { RootState } from '../store/store';
// import logo from './logo.svg';

type StateProps = {
  isLoggedIn: boolean
};

class AppComponent extends React.Component<StateProps> {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? null : <Redirect to="/login" />}
        <Route path="/login" component={} />
      </div>
    );
  }
}

const mapState = (state: RootState): StateProps => ({
  isLoggedIn: !!state.user
});

export const App = connect<StateProps>(mapState)(AppComponent);