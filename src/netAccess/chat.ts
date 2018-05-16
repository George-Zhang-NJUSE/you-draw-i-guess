import { socket } from './socket';
import { ClientEvent, ClientEventPayload } from '../constant/constant';
import { dispatch } from '../store/store';

socket.on(ClientEvent.CHAT, (message: ClientEventPayload['CHAT']) => {
  dispatch.chat.newMessage(message);
});