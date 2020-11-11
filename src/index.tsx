import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import "./index.css";
import theme from './theme';
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";

import supportedRegionSliceReducer from "./features/regions/supportedRegions/supportedRegionSlice";
import RegionState from "./features/regions/supportedRegions/supportedRegionState";

// The AppThunk type will help us in writing type definitions for thunk actions
export type AppThunk = ThunkAction<
  void,
  RegionState,
  unknown,
  Action<string>
>;

const store = configureStore({
  reducer: {
    // the convention is to name this photos rather than photosStore but photosStore is clearer to me.
    supportedRegionsStore: supportedRegionSliceReducer,

    // anyOtherStore: anyOtherSlice,
    // middleware: ['array of middlewares'],
    devTools: (process.env.NODE_ENV !== "development" ? false : true) as any,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
