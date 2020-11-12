import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AllAvailableForRegionSpotsSelector } from "./../features/spots/allAvailableForRegion/allAvailableForRegionSpotSelector";
import { getAllAvailableForRegionSpots } from "../features/spots/allAvailableForRegion/allAvailableForRegionSpotThunk";
import AllAvailableForRegionSpotState from "./../features/spots/allAvailableForRegion/allAvailableForRegionSpotState";

export default function useAllAvailableForRegion(regionName: string) {
  const dispatch = useDispatch();

  const { allAvailableForRegionSpots, loading, errors } = useSelector(
    AllAvailableForRegionSpotsSelector
  );

  useEffect(() => {
    dispatch(getAllAvailableForRegionSpots(regionName));
  }, [dispatch, regionName]);

  return {
    allAvailableForRegionSpots,
    loading,
    errors,
  } as AllAvailableForRegionSpotState;
}
