import axios from "axios";
import { AppThunk } from "../../index";
import { setErrors, setLoading, setSupportedRegions } from "./supportedRegionSlice";

export const getSupportedRegions = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "https://api.quarantine.country/api/v1/regions";
      // your apiKey should ideally be in a .env file
      //const apiKey = "AIzaSyBDipCJKnoTuhByJP2pB4A7Fx4SAOXoy-k";

      const res = await axios.get(`${baseURL}`);

      dispatch(setLoading(false));
      dispatch(setSupportedRegions(res.data));
    } catch (error) {
      dispatch(setErrors(error));
      dispatch(setLoading(false));
    }
  };
};
