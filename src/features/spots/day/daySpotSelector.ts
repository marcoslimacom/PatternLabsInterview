
import DaySpotState from './daySpotState';

export const DaySpotsSelector = (state: { daySpotsStore: DaySpotState }) =>
  state.daySpotsStore;
