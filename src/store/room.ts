import { Model } from '@rematch/core';
import { Room } from '../model/model';

type RoomModel = {
  state: Room | null
};

export const room: Model & RoomModel = {
  state: null,
  reducers: {
    joinRoom(state, roomId: number) {
      return loggedUser;
    }
  }
};

export type UserState = RoomModel['state'];