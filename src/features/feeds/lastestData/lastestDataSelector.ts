
import LastestDataState from './lastestDataState';

export const LastestDataSelector = (state: { lastestDataStore: LastestDataState }) =>
  state.lastestDataStore;
