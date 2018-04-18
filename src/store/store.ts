import { init } from '@rematch/core';
import { user, UserState } from './user';
import { Store } from 'react-redux';

export const store: Store<RootState> = init({
  models: {
    user
  }
});

export type RootState = {
  user: UserState
};

export const dispatch = store.dispatch as any;