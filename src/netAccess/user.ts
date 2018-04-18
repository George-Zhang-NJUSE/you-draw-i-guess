import { socket } from './socket';
import { ClientEvent, User } from '../model/model';
import { dispatch } from '../store/store';

socket.on(ClientEvent.LOGIN, (user: User) => {
  dispatch.user.loginAndRemember(user)
})
