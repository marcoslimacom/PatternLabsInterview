import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';

import { SupportedRegionsSelector } from "./../../features/supportedRegions/supportedRegionSelector";
import { getSupportedRegions } from "./../../features/supportedRegions/supportedRegionThunk";

import logo from './../../logo.svg';
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { supportedRegions, loading, errors } = useSelector(
    SupportedRegionsSelector
  );

  console.log(supportedRegions, loading, errors);

  useEffect(() => {
    dispatch(getSupportedRegions());
  }, [dispatch]);

  return (
    <Container maxWidth="sm" className="App">
      <Paper>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h4" component="h1" gutterBottom>
          Coronavirus
        </Typography>
        <Button variant="contained" color="primary">
          Screen 1
        </Button>
        <Button variant="contained" color="secondary">
          Screen 2
        </Button>
      </Paper>
    </Container>
  );
}

export default App;
