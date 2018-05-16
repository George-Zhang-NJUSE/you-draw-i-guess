import { Model } from '@rematch/core';
import { Room, User } from '../constant/constant';

export type CurrentRoomState = Room | null;

export const currentRoom: Model & { state: CurrentRoomState } = {
  state: null,
  reducers: {
    selfJoinRoom(state, room: Room): CurrentRoomState {
      return room;
    },
    otherJoinRoom(state: Room, user: User): CurrentRoomState {
      return { ...state, players: state.players.concat(user) }
    },
    selfLeaveRoom(state): CurrentRoomState {
      return null;
    },
    otherLeaveRoom(state: Room, other: User): CurrentRoomState {
      return { ...state, players: state.players.filter(p => p.userId !== other.userId) }
    }
  }
};
