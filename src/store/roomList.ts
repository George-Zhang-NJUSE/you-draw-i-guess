import { Model } from '@rematch/core';
import { Room, ServerEvent } from '../constant/constant';
import { socket } from '../netAccess/socket';

export type RoomListState = Room[];

export const roomList: Model & { state: RoomListState } = {
  state: [],
  reducers: {
    updateRoomList: (state: RoomListState, rooms: Room[]): RoomListState => rooms
  },
  effects: {
    requestRoomList() {
      socket.emit(ServerEvent.GET_ROOM_LIST);
    }
  }
};
