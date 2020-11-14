import React from "react";
import { render, screen } from "@testing-library/react";
import DetailedLevelComponent from "./DetailedLevelComponent";
import {
  getColumnsData,
  prepareRowData,
  getSkeletonVariants,
} from "./../../Containers/DetailedLevel/utils";

test("render DetailedLevelComponent test", () => {
  //ARRANGE
  const allAvailableForRegion = {
    loading: false,
    allAvailableForRegion: {
      data: {
        "2020-11-14": {
          total_cases: 109,
          deaths: 0,
          recovered: 83,
          critical: 0,
          tested: 4445,
          death_ratio: 0,
          recovery_ratio: 0.7614678899082569,
        },
      },
    },
  };
  const skeletonVariants = getSkeletonVariants();
  const columns = getColumnsData();
  const rows = prepareRowData(allAvailableForRegion.allAvailableForRegion.data);
  
  //ACTION
  render(
    <DetailedLevelComponent
      allAvailableForRegion={allAvailableForRegion}
      skeletonVariants={skeletonVariants}
      rows={rows}
      columns={columns}
    />
  );

  //ASSERT
  const linkElement = screen.getByText(/Total cases/i);
  expect(linkElement).toBeInTheDocument();
});
