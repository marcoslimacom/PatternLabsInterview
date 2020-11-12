import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSupportedRegions } from "../features/regions/supportedRegions/supportedRegionThunk";
import { SupportedRegionsSelector } from "./../features/regions/supportedRegions/supportedRegionSelector";
import SupportedRegionState from "./../features/regions/supportedRegions/supportedRegionState";

export default function useSupportedRegions() {
  const dispatch = useDispatch();

  const { supportedRegions, loading, errors } = useSelector(
    SupportedRegionsSelector
  );

  useEffect(() => {
    dispatch(getSupportedRegions());
  }, [dispatch]);

  return { supportedRegions, loading, errors } as SupportedRegionState;
}
