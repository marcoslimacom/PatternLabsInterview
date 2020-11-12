import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AllAvailableSummarySpotState from "./allAvailableSummarySpotState";

const initialState: AllAvailableSummarySpotState = {
  allAvailableSummarySpots: {
    data: {},
  },
  loading: false,
  errors: "",
};

const AllAvailableSummarySpotSlice = createSlice({
  name: "AllAvailableSummarySpots",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setAllAvailableSummarySpots: (state, { payload }: PayloadAction<any>) => {
      state.allAvailableSummarySpots = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setAllAvailableSummarySpots,
} = AllAvailableSummarySpotSlice.actions;

export default AllAvailableSummarySpotSlice.reducer;
