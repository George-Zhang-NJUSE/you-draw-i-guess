import { Model } from '@rematch/core';
import { User } from '../model/model';

type UserModel = {
  state: User | null
};

const storage = localStorage.getItem('user');
const initState: User | null = storage && JSON.parse(storage);

export const user: Model & UserModel = {
  state: initState,
  reducers: {
    login(state, loggedUser: User) {
      return loggedUser;
    }
  },
  effects: {
    loginAndRemember(loggedUser: User, rootState) {
      this.login(loggedUser, undefined);
      localStorage.setItem('user', JSON.stringify(loggedUser));
    }
  }
};

export type UserState = UserModel['state'];