import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { Room } from '../constant/constant';
import { ActionBar } from './ActionBar';

type StateProps = {
  roomList: Room[]
}

type DispatchProps = {
  requestRoomList: () => void
};

type Props = StateProps & DispatchProps;

class HomeComponent extends React.Component<Props> {

  componentDidMount() {
    this.props.requestRoomList();
  }

  render() {
    const { roomList } = this.props;
    return (
      <div>
        <main>
          {roomList.length > 0 ?
            <ul>
              {roomList.map(room => <li>{room.roomName} {room.players.length}人</li>)}
            </ul>
            : '没有房间'
          }
        </main>
        <footer>
          <ActionBar />
        </footer>
      </div>
    );
  }
}

const mapState = (state: RootState): StateProps => ({
  roomList: state.roomList
});

const mapDispatch = (dispatch: any): DispatchProps => ({
  requestRoomList: dispatch.roomList.requestRoomList
});

export const Home = connect<StateProps, DispatchProps>(mapState, mapDispatch)(HomeComponent);
