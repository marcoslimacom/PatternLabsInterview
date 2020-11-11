import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setMonthSpots } from "./monthSpotSlice";
import { baseURL } from "../../config";

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
