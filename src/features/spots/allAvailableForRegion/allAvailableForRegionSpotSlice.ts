import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AllAvailableForRegionSpotState from "./allAvailableForRegionSpotState";

const initialState: AllAvailableForRegionSpotState = {
  allAvailableForRegionSpots: {
    data: {},
  },
  loading: false,
  errors: "",
};

const AllAvailableForRegionSpotSlice = createSlice({
  name: "AllAvailableForRegionSpots",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setAllAvailableForRegionSpots: (state, { payload }: PayloadAction<any>) => {
      state.allAvailableForRegionSpots = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setAllAvailableForRegionSpots,
} = AllAvailableForRegionSpotSlice.actions;

export default AllAvailableForRegionSpotSlice.reducer;
