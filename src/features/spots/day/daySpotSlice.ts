import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import DaySpotState from "./daySpotState";

const initialState: DaySpotState = {
  daySpots: {
    data: {},
  },
  loading: false,
  errors: "",
};

const DaySpotSlice = createSlice({
  name: "DaySpots",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setDaySpots: (state, { payload }: PayloadAction<any>) => {
      state.daySpots = payload;
    },
  },
});

export const { setLoading, setErrors, setDaySpots } = DaySpotSlice.actions;

export default DaySpotSlice.reducer;
