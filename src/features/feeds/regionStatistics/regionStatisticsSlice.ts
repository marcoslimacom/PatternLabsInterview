import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RegionStatisticsState from './regionStatisticsState';

const initialState: RegionStatisticsState = {
  regionStatistics: [],
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

    setRegionStatistics: (state, { payload }: PayloadAction<object[]>) => {
      state.regionStatistics = payload;
    },
  },
});

export const { setLoading, setErrors, setRegionStatistics } = RegionStatisticsSlice.actions;

export default RegionStatisticsSlice.reducer;