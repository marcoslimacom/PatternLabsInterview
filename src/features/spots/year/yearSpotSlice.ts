import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import YearSpotState from "./yearSpotState";

const initialState: YearSpotState = {
  yearSpots: {
    data: {},
  },
  loading: false,
  errors: "",
};

const YearSpotSlice = createSlice({
  name: "YearSpots",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setYearSpots: (state, { payload }: PayloadAction<any>) => {
      state.yearSpots = payload;
    },
  },
});

export const { setLoading, setErrors, setYearSpots } = YearSpotSlice.actions;

export default YearSpotSlice.reducer;
