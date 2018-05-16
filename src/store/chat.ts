import { Model } from '@rematch/core';
import { ChatMessage } from '../constant/constant';

export type ChatState = ChatMessage[];

export const chat: Model & { state: ChatState } = {
  state: [],
  reducers: {
    'currentRoom/selfLeaveRoom': (): ChatState => [],
    newMessage: (state: ChatState, message: ChatMessage): ChatState => state.concat(message)
  }
}