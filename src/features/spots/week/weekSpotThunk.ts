import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setWeekSpots } from "./weekSpotSlice";
import { baseURL } from "../../config";

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
