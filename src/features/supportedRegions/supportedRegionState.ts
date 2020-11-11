import SupportedRegionModel from "./supportedRegionModel";

export default interface SupportedRegionState {
  supportedRegions: SupportedRegionModel[];
  loading: boolean;
  errors: string;
}
