import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../store/store';
import { ChangeEventHandler, FormEventHandler } from 'react';

type DispatchProps = {
  requestLogin: (userName: string) => void
};

type StateProps = {
  isLoggedIn: boolean
};

type Props = DispatchProps & StateProps;

type State = {
  userName: string
};

class LoginComponent extends React.Component<Props, State> {

  state: State = {
    userName: ''
  };

  handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.requestLogin(this.state.userName);
  }

  handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as any);
  }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/" />;
    }
    const { userName } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleInputChange as any}>
        <label htmlFor="username">昵称：</label>
        <input type="text" id="username" value={userName} name="userName" />
        <input type="submit" value="进入" />
      </form>
    );
  }

}

const mapState = (state: RootState): StateProps => ({
  isLoggedIn: !!state.user
});

const mapDispatch = (dispatch: any): DispatchProps => ({
  requestLogin: dispatch.user.requestLogin
});

export const Login = connect<StateProps, DispatchProps>(mapState, mapDispatch)(LoginComponent);
