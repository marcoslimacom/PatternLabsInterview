import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { SupportedRegionsSelector } from './features/supportedRegions/supportedRegionSelector';
import { getSupportedRegions } from './features/supportedRegions/supportedRegionThunk';

import logo from "./logo.svg";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { supportedRegions, loading, errors } = useSelector(SupportedRegionsSelector);

  console.log(supportedRegions, loading, errors);

  useEffect(() => {
    dispatch(getSupportedRegions());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
