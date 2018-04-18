import { socket } from './socket';
import { ClientEvent, User } from '../model/model';
import { dispatch } from '../store/store';

socket.on(ClientEvent.SELF_JOIN_ROOM, (user: User) => {
  dispatch.user.loginAndRemember(user)
})

socket.