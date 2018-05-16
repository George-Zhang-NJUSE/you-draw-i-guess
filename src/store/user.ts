import { Model } from '@rematch/core';
import { User, ServerEvent } from '../constant/constant';
import { socket } from '../netAccess/socket';

export type UserState = User | null;

const storage = localStorage.getItem('user');
const initState: UserState = storage && JSON.parse(storage);

export const user: Model & { state: UserState } = {
  state: initState,
  reducers: {
    login(state, loggedUser: User) {
      return loggedUser;
    }
  },
  effects: {
    /**
     * 获取到用户id后将维持登录状态，除非用户手动删除localStorage
     * 若删除后，下次登录将分配新的userId
     * @param loggedUser 
     * @param rootState 
     */
    loginAndRemember(loggedUser: User, rootState) { 
      this.login(loggedUser, undefined);
      localStorage.setItem('user', JSON.stringify(loggedUser));
    },
    requestLogin(userName: string) {  
      socket.emit(ServerEvent.LOGIN, userName);
    }
  }
};
