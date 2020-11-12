import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { setErrors, setLoading, setMonthSpots } from "./monthSpotSlice";
import { baseURL } from "../../config";
import MonthSpotState from './monthSpotState';

export type AppThunk = ThunkAction<
  void,
  MonthSpotState,
  unknown,
  Action<string>
>;

export const getMonthSpots = (region: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/spots/month?region=${region}`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setMonthSpots(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
