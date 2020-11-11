import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setLastestData } from "./lastestDataSlice";
import { baseURL } from "./../../config";

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
