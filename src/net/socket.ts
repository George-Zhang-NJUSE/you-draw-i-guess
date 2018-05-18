import * as io from 'socket.io-client';
import { configureChatHandler } from './chat';
import { configureUserHandler } from './user';
import { configureRoomHandler } from './room';

const socket = io('http://localhost:8080');

configureChatHandler(socket);
configureUserHandler(socket);
configureRoomHandler(socket);

export { socket };