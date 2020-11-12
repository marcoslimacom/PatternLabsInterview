import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { setErrors, setLoading, setDaySpots } from "./daySpotSlice";
import { baseURL } from "../../config";
import DaySpotState from './daySpotState';

export type AppThunk = ThunkAction<
  void,
  DaySpotState,
  unknown,
  Action<string>
>;

export const getDaySpots = (region: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/spots/day?region=${region}`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setDaySpots(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
