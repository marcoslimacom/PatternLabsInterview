
import SupportedRegionState from './supportedRegionState';

export const SupportedRegionsSelector = (state: { supportedRegionsStore: SupportedRegionState }) =>
  state.supportedRegionsStore;
