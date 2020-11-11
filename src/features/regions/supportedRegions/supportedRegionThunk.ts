import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setSupportedRegions } from "./supportedRegionSlice";
import { baseURL } from './../../config';

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
