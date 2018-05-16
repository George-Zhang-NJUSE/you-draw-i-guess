import * as React from 'react';
import { socket } from '../netAccess/socket';
import { ServerEvent, ServerEventPayload } from '../constant/constant';
import { FormEventHandler, ChangeEventHandler } from 'react';

type State = {
  newRoomName: string
  shouldShowForm: boolean
}

export class ActionBar extends React.Component<{}, State> {

  state: State = {
    newRoomName: '',
    shouldShowForm: false
  }

  handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as any);
  }


  handleClickNewRoom = () => {
    this.setState({ shouldShowForm: true });
  }

  handleOpenNewRoom: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    socket.emit(ServerEvent.OPEN_NEW_ROOM, this.state.newRoomName as ServerEventPayload['OPEN_NEW_ROOM']);
  }

  render() {
    const { newRoomName } = this.state;
    return (
      <div>
        <button onClick={this.handleClickNewRoom}>创建新房间</button>
        <form onSubmit={this.handleOpenNewRoom} onChange={this.handleInputChange as any}>
          <input type="text" value={newRoomName} placeholder="房间名" name="newRoomName" />
          <input type="submit" value=">" />
        </form>
      </div>
    );
  }
}
