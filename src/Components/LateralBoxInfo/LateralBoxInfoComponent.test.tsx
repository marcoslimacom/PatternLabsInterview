import React from "react";
import { render, screen } from "@testing-library/react";
import LateralBoxInfoComponent from "./LateralBoxInfoComponent";
import { prepareLateralBoxData } from "./../../Containers/LateralBoxInfo/utils";

test("render LateralBoxInfoComponent test", () => {
  //ARRANGE
  const regionName = "Brazil";
  const loading = false;
  const summaryData = prepareLateralBoxData({
    total_cases: 53647185,
    active_cases: 15142581,
    deaths: 1323051,
    recovered: 37181553,
    critical: 107266,
    tested: 842502427,
    death_ratio: 0.024662076863865273,
    recovery_ratio: 0.6930755639834597,
  });
  const changeData = prepareLateralBoxData({
    total_cases: 628179,
    active_cases: 248664,
    deaths: 24199,
    recovered: 355316,
    critical: 13766,
    tested: 5628876,
    death_ratio: 0.00016422037821180874,
    recovery_ratio: -0.0015100153840599262,
  });

  //ACTION
  render(
    <LateralBoxInfoComponent
      loading={loading}
      regionName={regionName}
      summaryData={summaryData}
      changeData={changeData}
    />
  );

  //ASSERT
  const linkElement = screen.getByText(/53647185/i);
  expect(linkElement).toBeInTheDocument();
});
