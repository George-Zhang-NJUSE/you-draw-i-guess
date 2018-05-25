import * as React from 'react';
import { connect } from 'react-redux';
import { ChangeEventHandler, FormEventHandler } from 'react';
import { User } from '../constant/constant';

type DispatchProps = {
  requestLogin: (userData: Partial<User>) => void
};

type Props = DispatchProps;

type State = {
  userName: string
};

class LoginComponent extends React.Component<Props, State> {

  state: State = {
    userName: ''
  };

  handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    this.props.requestLogin({ userName: this.state.userName });
  }

  handleInputChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as any);
  }

  render() {
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

const mapDispatch = (dispatch: any): DispatchProps => ({
  requestLogin: dispatch.user.requestLogin
});

export const Login = connect<{}, DispatchProps>(undefined, mapDispatch)(LoginComponent);
