
import RegionStatisticsState from './regionStatisticsState';

export const RegionStatisticsSelector = (state: { regionStatisticsStore: RegionStatisticsState }) =>
  state.regionStatisticsStore;
