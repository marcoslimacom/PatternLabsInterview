import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RegionStatisticsState from "./regionStatisticsState";

const initialState: RegionStatisticsState = {
  regionStatistics: {
    data: {},
  },
  loading: false,
  errors: "",
};

const RegionStatisticsSlice = createSlice({
  name: "RegionStatistics",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setRegionStatistics: (state, { payload }: PayloadAction<any>) => {
      state.regionStatistics = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setRegionStatistics,
} = RegionStatisticsSlice.actions;

export default RegionStatisticsSlice.reducer;
