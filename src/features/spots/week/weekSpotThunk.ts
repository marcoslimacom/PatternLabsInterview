import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { setErrors, setLoading, setWeekSpots } from "./weekSpotSlice";
import { baseURL } from "../../config";
import WeekSpotState from './weekSpotState';

export type AppThunk = ThunkAction<
  void,
  WeekSpotState,
  unknown,
  Action<string>
>;

export const getWeekSpots = (region: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/spots/week?region=${region}`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setWeekSpots(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
