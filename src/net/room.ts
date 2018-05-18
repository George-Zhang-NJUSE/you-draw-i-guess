import { ClientEvent, ClientEventPayload } from '../constant/constant';
import { dispatch } from '../store/store';

export function configureRoomHandler(socket: SocketIOClient.Socket) {

  socket.on(ClientEvent.SELF_JOIN_ROOM, (room: ClientEventPayload['SELF_JOIN_ROOM']) => {
    dispatch.currentRoom.selfJoinRoom(room);
  });

  socket.on(ClientEvent.OTHER_JOIN_ROOM, (other: ClientEventPayload['OTHER_JOIN_ROOM']) => {
    dispatch.currentRoom.otherJoinRoom(other);
  });

  socket.on(ClientEvent.SELF_LEAVE_ROOM, () => {
    dispatch.currentRoom.selfLeaveRoom();
  });

  socket.on(ClientEvent.OTHER_LEAVE_ROOM, (user: ClientEventPayload['OTHER_LEAVE_ROOM']) => {
    dispatch.currentRoom.otherLeaveRoom(user);
  });

  socket.on(ClientEvent.GET_ROOM_LIST, (rooms: ClientEventPayload['GET_ROOM_LIST']) => {
    dispatch.roomList.updateRoomList(rooms);
  });

}