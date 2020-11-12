import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

import { setErrors, setLoading, setLastestData } from "./lastestDataSlice";
import { baseURL } from "./../../config";
import LastestDataState from './lastestDataState';

export type AppThunk = ThunkAction<
  void,
  LastestDataState,
  unknown,
  Action<string>
>;


export const getLastestData = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/summary/latest`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setLastestData(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
