import { init } from '@rematch/core';
import { Store } from 'react-redux';
import { user, UserState } from './user';
import { currentRoom, CurrentRoomState } from './currentRoom';
import { chat, ChatState } from './chat';
import { roomList, RoomListState } from './roomList';

export const store: Store<RootState> = init({
  models: {
    user,
    roomList,
    currentRoom,
    chat
  }
});

export type RootState = {
  user: UserState
  roomList:RoomListState
  currentRoom: CurrentRoomState
  chat: ChatState
};

export const dispatch = store.dispatch as any;