import { ClientEvent, ClientEventPayload } from '../constant/constant';
import { dispatch } from '../store/store';

export function configureUserHandler(socket: SocketIOClient.Socket) {
  socket.on(ClientEvent.LOGIN, (user: ClientEventPayload['LOGIN']) => {
    dispatch.user.loginAndRemember(user);
  });
}

