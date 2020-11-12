import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SupportedRegionState from "./supportedRegionState";

const initialState: SupportedRegionState = {
  supportedRegions: {
    data: {},
  },
  loading: false,
  errors: "",
};

const SupportedRegionSlice = createSlice({
  name: "SupportedRegions",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setSupportedRegions: (state, { payload }: PayloadAction<any>) => {
      state.supportedRegions = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setSupportedRegions,
} = SupportedRegionSlice.actions;

export default SupportedRegionSlice.reducer;
