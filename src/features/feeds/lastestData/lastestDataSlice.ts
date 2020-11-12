import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import LastestDataState from "./lastestDataState";

const initialState: LastestDataState = {
  lastestData: {
    data: {},
  },
  loading: false,
  errors: "",
};

const LastestDataSlice = createSlice({
  name: "LastestData",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setLastestData: (state, { payload }: PayloadAction<any>) => {
      state.lastestData = payload;
    },
  },
});

export const {
  setLoading,
  setErrors,
  setLastestData,
} = LastestDataSlice.actions;

export default LastestDataSlice.reducer;
