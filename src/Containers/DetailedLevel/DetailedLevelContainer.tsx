import React, { useEffect } from "react";
import useAllAvailableForRegion from "../../effects/useAllAvailableForRegion";
import useRegionStatistics from "../../effects/useRegionStatistics";
import { getColumnsData, prepareRowData, getSkeletonVariants } from "./utils";
import DetailedLevelComponent from "./../../Components/DetailedLevel/DetailedLevelComponent";

type DetailedLevelContainerProps = {
  regionName: any;
  setTotalDataLbi: any;
  setTodayDataLbi: any;
  setLoadingStateLbi: any;
};

export default function DetailedLevelContainer({
  regionName,
  setTotalDataLbi,
  setTodayDataLbi,
  setLoadingStateLbi,
}: DetailedLevelContainerProps) {

  const subAreas = false;
  const regionStatistics = useRegionStatistics(regionName, subAreas);

  const allAvailableForRegion = useAllAvailableForRegion(regionName);
  const columns = getColumnsData();
  const rows = prepareRowData(
    allAvailableForRegion.allAvailableForRegionSpots.data
  );
  const skeletonVariants = getSkeletonVariants();

  useEffect(() => {
    setTotalDataLbi(regionStatistics.regionStatistics.data.summary);
    setTodayDataLbi(regionStatistics.regionStatistics.data.change);
    setLoadingStateLbi(
      regionStatistics.loading || allAvailableForRegion.loading
    );
  }, [
    regionStatistics,
    allAvailableForRegion,
    setLoadingStateLbi,
    setTodayDataLbi,
    setTotalDataLbi,
  ]);

  return (
    <DetailedLevelComponent
      allAvailableForRegion={allAvailableForRegion}
      skeletonVariants={skeletonVariants}
      rows={rows}
      columns={columns}
    />
  );
}
