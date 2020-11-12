import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import {
  setErrors,
  setLoading,
  setRegionStatistics,
} from "./regionStatisticsSlice";
import { baseURL } from "../../config";
import RegionStatisticsState from './regionStatisticsState';

export type AppThunk = ThunkAction<
  void,
  RegionStatisticsState,
  unknown,
  Action<string>
>;

export const getRegionStatistics = (
  region: string,
  subAreas: boolean = true
): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const subAreasNumber = subAreas ? 1 : 0;
      const url: string = `${baseURL}/api/v1/summary/region?region=${region}&sub_areas=${subAreasNumber}`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setRegionStatistics(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
