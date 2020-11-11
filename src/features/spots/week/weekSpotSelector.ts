
import WeekSpotState from './weekSpotState';

export const WeekSpotsSelector = (state: { weekSpotsStore: WeekSpotState }) =>
  state.weekSpotsStore;
