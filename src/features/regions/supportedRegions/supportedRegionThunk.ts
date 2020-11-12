import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { baseURL } from './../../config';
import SupportedRegionState from './supportedRegionState';
import { setErrors, setLoading, setSupportedRegions } from "./supportedRegionSlice";

export type AppThunk = ThunkAction<
  void,
  SupportedRegionState,
  unknown,
  Action<string>
>;

export const getSupportedRegions = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/regions`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setSupportedRegions(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
