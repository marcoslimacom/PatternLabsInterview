
import MonthSpotState from './monthSpotState';

export const MonthSpotsSelector = (state: { monthSpotsStore: MonthSpotState }) =>
  state.monthSpotsStore;
