import { Model } from '@rematch/core';
import { User, ServerEvent, ServerEventPayload } from '../constant/constant';
import { socket } from '../net/socket';

export type UserState = User | null;

export const user: Model & { state: UserState } = {
  state: null,
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
     */
    loginAndRemember(loggedUser: User) {
      this.login(loggedUser, undefined);
      localStorage.setItem('user', JSON.stringify(loggedUser));
    },
    /**
     * 请求用户登录
     * @param userData 若为新用户，则只包含用户名；否则包含完整数据
     */
    requestLogin(userData: Partial<User>) {
      socket.emit(ServerEvent.LOGIN, userData as ServerEventPayload['LOGIN']);
    }
  }
};
