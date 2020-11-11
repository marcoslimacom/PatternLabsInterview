import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SupportedRegionState from './supportedRegionState';
import SupportedRegionModel from './supportedRegionModel';

const initialState: SupportedRegionState = {
  supportedRegions: [],
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

    setSupportedRegions: (state, { payload }: PayloadAction<SupportedRegionModel[]>) => {
      debugger
      state.supportedRegions = payload;
    },
  },
});

export const { setLoading, setErrors, setSupportedRegions } = SupportedRegionSlice.actions;

export default SupportedRegionSlice.reducer;