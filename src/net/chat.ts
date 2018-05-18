import { ClientEvent, ClientEventPayload } from '../constant/constant';
import { dispatch } from '../store/store';

export function configureChatHandler(socket: SocketIOClient.Socket) {

  socket.on(ClientEvent.CHAT, (message: ClientEventPayload['CHAT']) => {
    dispatch.chat.newMessage(message);
  });
  
}