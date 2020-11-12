import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MonthSpotState from "./monthSpotState";

const initialState: MonthSpotState = {
  monthSpots: {
    data: {},
  },
  loading: false,
  errors: "",
};

const MonthSpotSlice = createSlice({
  name: "MonthSpots",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setMonthSpots: (state, { payload }: PayloadAction<any>) => {
      state.monthSpots = payload;
    },
  },
});

export const { setLoading, setErrors, setMonthSpots } = MonthSpotSlice.actions;

export default MonthSpotSlice.reducer;
