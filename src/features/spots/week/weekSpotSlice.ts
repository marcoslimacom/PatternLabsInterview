import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import WeekSpotState from "./weekSpotState";

const initialState: WeekSpotState = {
  weekSpots: {
    data: {},
  },
  loading: false,
  errors: "",
};

const WeekSpotSlice = createSlice({
  name: "WeekSpots",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setWeekSpots: (state, { payload }: PayloadAction<any>) => {
      state.weekSpots = payload;
    },
  },
});

export const { setLoading, setErrors, setWeekSpots } = WeekSpotSlice.actions;

export default WeekSpotSlice.reducer;
