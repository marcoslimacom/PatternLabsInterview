import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setAllAvailableSummarySpots } from "./allAvailableSummarySpotSlice";
import { baseURL } from "../../config";

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
