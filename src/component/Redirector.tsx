import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { RootState } from '../store/store';
import { CurrentRoomState } from '../store/currentRoom';

type StateProps = {
  isLoggedIn: boolean,
  currentRoom: CurrentRoomState
};

type Props = StateProps & RouteComponentProps<{}>;

type RedirectRule = {
  condition: boolean
  to: string
};

/**
 * 根据传参控制页面跳转
 */
class RedirectorComponent extends React.Component<Props> {

  render() {

    const { isLoggedIn, currentRoom, history: { location } } = this.props;

    const rules: RedirectRule[] = [
      { condition: !isLoggedIn, to: '/login' },
      { condition: isLoggedIn && !currentRoom, to: '/' },
      { condition: isLoggedIn && !!currentRoom, to: '/room'}
    ];

    for (const rule of rules) {
      if (rule.condition && location.pathname !== rule.to) {
        return <Redirect to={rule.to} />;
      }
    }
    return null;
  
  }
}

const mapState = (state: RootState): StateProps => ({
  isLoggedIn: !!state.user,
  currentRoom: state.currentRoom
});

export const Redirector = connect<StateProps>(mapState)(RedirectorComponent);
