import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';
import App from "./Components/App/App";
import reportWebVitals from "./reportWebVitals";

import supportedRegionSliceReducer from "./features/regions/supportedRegions/supportedRegionSlice";
import lastestDataSliceReducer from "./features/feeds/lastestData/lastestDataSlice";
import regionStatisticsSliceReducer from "./features/feeds/regionStatistics/regionStatisticsSlice";
import allAvailableForRegionSpotSliceReducer from "./features/spots/allAvailableForRegion/allAvailableForRegionSpotSlice";
import allAvailableSummarySpotSliceReducer from "./features/spots/allAvailableSummary/allAvailableSummarySpotSlice";
import daySpotSliceReducer from "./features/spots/day/daySpotSlice";
import weekSpotSliceReducer from "./features/spots/week/weekSpotSlice";
import monthSpotSliceReducer from "./features/spots/month/monthSpotSlice";
import yearSpotSliceReducer from "./features/spots/year/yearSpotSlice";

const store = configureStore({
  reducer: {
    supportedRegionsStore: supportedRegionSliceReducer,
    lastestDataStore: lastestDataSliceReducer,
    regionStatisticsStore: regionStatisticsSliceReducer,
    allAvailableForRegionSpotsStore: allAvailableForRegionSpotSliceReducer,
    allAvailableSummarySpotsStore: allAvailableSummarySpotSliceReducer,
    daySpotsStore: daySpotSliceReducer,
    weekSpotsStore: weekSpotSliceReducer,
    monthSpotsStore: monthSpotSliceReducer,
    yearSpotsStore: yearSpotSliceReducer,

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
