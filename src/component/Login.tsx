import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../store/store';
import { User } from '../model/model';
// import logo from './logo.svg';

type DispatchProps = {
  loginAndRemember: (user: User) => void
};

type StateProps = {
  isLoggedIn: boolean
};

type Props = DispatchProps & StateProps;

class LoginComponent extends React.Component<Props> {

  handleSubmit = () => {

  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">昵称：</label>
        <input type="text" id="username" />
        <input type="submit" value="进入" />
      </form>
    );
  }

}

const mapState = (state: RootState): StateProps => ({
  isLoggedIn: !!state.user
});


export const App = connect<StateProps>(mapState)(LoginComponent);
