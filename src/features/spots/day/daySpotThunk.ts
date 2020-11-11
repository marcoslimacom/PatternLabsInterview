import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setDaySpots } from "./daySpotSlice";
import { baseURL } from "../../config";

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
