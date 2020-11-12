import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { setErrors, setLoading, setYearSpots } from "./yearSpotSlice";
import { baseURL } from "../../config";
import YearSpotState from './yearSpotState';

export type AppThunk = ThunkAction<
  void,
  YearSpotState,
  unknown,
  Action<string>
>;

export const getYearSpots = (region: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/spots/year?region=${region}`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setYearSpots(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
