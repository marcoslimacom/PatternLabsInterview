import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RegionStatisticsSelector } from "../features/feeds/regionStatistics/regionStatisticsSelector";
import { getRegionStatistics } from "../features/feeds/regionStatistics/regionStatisticsThunk";
import RegionStatisticsState from "./../features/feeds/regionStatistics/regionStatisticsState";

export default function useRegionStatistics(
  regionName: string,
  subAreas: boolean
) {
  const dispatch = useDispatch();

  const { regionStatistics, loading, errors } = useSelector(
    RegionStatisticsSelector
  );

  useEffect(() => {
    dispatch(getRegionStatistics(regionName, subAreas));
  }, [dispatch, regionName, subAreas]);

  return { regionStatistics, loading, errors } as RegionStatisticsState;
}
