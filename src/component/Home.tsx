import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { Room, ServerEvent, ServerEventPayload } from '../constant/constant';
import { ActionBar } from './ActionBar';
import { socket } from '../net/socket';
import { MouseEventHandler } from 'react';

type StateProps = {
  roomList: Room[]
};

type DispatchProps = {
  requestRoomList: () => void
};

type Props = StateProps & DispatchProps;

class HomeComponent extends React.Component<Props> {

  componentDidMount() {
    this.props.requestRoomList();
  }

  handleEnterRoom: MouseEventHandler<HTMLUListElement> = (e) => {
    const item = e.target as HTMLLIElement;
    const roomId = +item.dataset.roomId!;
    socket.emit(ServerEvent.SELF_JOIN_ROOM, roomId as ServerEventPayload['SELF_JOIN_ROOM']);
  }

  render() {
    const { roomList } = this.props;
    return (
      <div>
        <main>
          {roomList.length > 0 ?
            <ul onClick={this.handleEnterRoom}>
              {roomList.map(r =>
                <li key={r.roomId} data-room-id={r.roomId}>
                  {r.roomName} {r.players.length}人
                </li>)}
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
