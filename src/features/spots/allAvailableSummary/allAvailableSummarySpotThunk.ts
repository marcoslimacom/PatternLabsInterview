import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { setErrors, setLoading, setAllAvailableSummarySpots } from "./allAvailableSummarySpotSlice";
import { baseURL } from "../../config";
import AllAvailableSummarySpotState from './allAvailableSummarySpotState';

export type AppThunk = ThunkAction<
  void,
  AllAvailableSummarySpotState,
  unknown,
  Action<string>
>;

export const getAllAvailableSummarySpots = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/spots/summary`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setAllAvailableSummarySpots(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
