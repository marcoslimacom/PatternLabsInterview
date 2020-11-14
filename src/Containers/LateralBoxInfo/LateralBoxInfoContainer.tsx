import React from "react";

import { prepareLateralBoxData } from "./utils";
import LateralBoxInfoComponent from "./../../Components/LateralBoxInfo/LateralBoxInfoComponent";

type LateralBoxInfoContainerProps = {
  regionName?: string;
  summary: any;
  change: any;
  loading: boolean;
};

export default function LateralBoxInfoContainer({
  summary,
  change,
  regionName,
  loading,
}: LateralBoxInfoContainerProps) {
  var summaryData = prepareLateralBoxData(summary);
  var changeData = prepareLateralBoxData(change);

  return (
    <LateralBoxInfoComponent
      loading={loading}
      regionName={regionName}
      summaryData={summaryData}
      changeData={changeData}
    />
  );
}
