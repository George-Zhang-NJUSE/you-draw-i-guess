import { socket } from './socket';
import { ClientEvent, ClientEventPayload } from '../constant/constant';
import { dispatch } from '../store/store';

socket.on(ClientEvent.LOGIN, (user: ClientEventPayload['LOGIN']) => {
  dispatch.user.loginAndRemember(user)
})

