
import * as React from "react";
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';
import VendorRegistrationForm from "./components/Forms/RegistrationForm/VendorRegistrationForm";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { createMuiTheme, colors, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core';
import Credentials from './components/Forms/Login/Credentials';
import CustomerRegistrationForm from './components/Forms/RegistrationForm/CustomerRegistrationForm';
import Landingpage from './components/Forms/LandingPage/Landingpage';
const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 20,
      fontFamily:`"Calibri","Helvetica neue","Tahoma","Arial",sans-serif`,
    },
    body1: {
      fontWeight: 12,
      fontFamily:`"Calibri","Helvetica neue","Tahoma","Arial",sans-serif`,
    },
    subtitle2: {
      fontSize: 15,
      fontFamily:`"Calibri","Helvetica neue","Tahoma","Arial",sans-serif`,
      fontWeight:"bold",
     
    },
    caption:{
      fontSize: 15,
      fontFamily:`"Calibri","Helvetica neue","Tahoma","Arial",sans-serif`,
      
    }
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  
  
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
  
    height: '100%',
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 10,
    },
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    width: "100%",
    height: '100%',
    backgroundColor:"green"
   
  },
  content: {
    flex: "inherit",
    width: "100%",
    height: "100%",
    paddingTop: "5%",
    backgroundColor:"#E8EBF0"
  
  },
}));


function App() {
  const classes = useStyles();
  return (
    <div style={{height:"100%"}}className="App">
     <ThemeProvider theme={theme}>
   
        <Grid className={classes.root}>
          <Grid className={classes.wrapper}>
            <Grid className={classes.contentContainer}>
              <Grid className={classes.content}>
             <Landingpage/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
  
    </ThemeProvider>
    </div>
  );
}

export default App;
