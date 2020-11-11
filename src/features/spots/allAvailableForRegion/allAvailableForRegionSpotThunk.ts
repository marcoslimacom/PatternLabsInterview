import axios from "axios";
import { AppThunk } from "../../../index";
import { setErrors, setLoading, setAllAvailableForRegionSpots } from "./allAvailableForRegionSpotSlice";
import { baseURL } from "../../config";

export const getAllAvailableForRegionSpots = (region: string): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const url: string = `${baseURL}/api/v1/spots/region?region=${region}`;
      const res = await axios.get(`${url}`);

      dispatch(setLoading(false));
      dispatch(setAllAvailableForRegionSpots(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
