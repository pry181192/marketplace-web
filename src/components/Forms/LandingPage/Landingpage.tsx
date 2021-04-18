import * as React from 'react'
import styled from "styled-components";
import {
    makeStyles,
    createStyles,
    withStyles,
    Theme,
  } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import BackgroundImage from "./BackgroundImage.jpeg";
import Credentials from '../Login/Credentials';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { TabContext,TabPanel } from '@material-ui/lab';
import { Grid,Button, CardContent, Dialog, Divider ,DialogActions, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import CustomerRegistrationForm from '../RegistrationForm/CustomerRegistrationForm';
import VendorRegistrationForm from '../RegistrationForm/VendorRegistrationForm';

const useStyles = makeStyles({
    cardroot: {
      maxWidth: 345,
      position: "absolute",
    bottom: "30%",
    left: "40%",
    },
    media: {
      height: 140,
    },
  });

  const Styleddiv = styled.div`

  font-size: 32px;
  color: white;
  height:100%;
`;
const CustomTabs = withStyles((theme: Theme) =>
  createStyles({

    root: {
      justifyContent: 'center',
      textAlign: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },

    indicator: {
      background: "#003D6A",
      //'repeating-linear-gradient(-45deg, #003366, #003366 2%,#336699 2% ,  #336699 4%)',

      //schunmargin:"2px",
    },


  })

)(Tabs);

const Landingpage=()=> {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [tabvalue, setTabvalue] = React.useState("1");
    
    const handleTabChange = (event:any, newValue:string) => {
        setTabvalue(newValue);
       
      };
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

const Forms=()=>{
    return(
        <TabContext value={tabvalue}>
        <Grid style={{ maxHeight: '100%', display: 'flex', flexFlow: 'column' }}>
          <CustomTabs style={{ flex: '0 1 auto' }} centered={true} value={tabvalue} onChange={handleTabChange} aria-label="simple tabs example">
            <Tab label="Seller" value="1" />
            <Tab label="Buyer" value="2" />
          </CustomTabs>
    
          <TabPanel value="1">
              <VendorRegistrationForm/>
            </TabPanel>
          <TabPanel value="2">
           <CustomerRegistrationForm/>
          </TabPanel>
        </Grid>
      </TabContext>
    );
  
 
}

const SiteDetail=()=>{
    return(
        <Grid>
        <Typography style={{color:"blue"}}>
            Welcome to the new world of Buying and Selling 
        </Typography>
    </Grid>
    )
    
}


    return (
<Styleddiv>
 
           <Card className={classes.cardroot}>
               <CardContent>
               <Credentials/>
               <Divider/>
               <Button  onClick={handleClickOpen} variant="contained" style={{background:"green",color:"white"}}>Create New Account</Button>
               <Dialog open={open}
        onClose={handleClose}
       >
<DialogTitle id="alert-dialog-title">{"Want to open a new accout?"}</DialogTitle>
<DialogContent>
    <Forms/>
    </DialogContent>
<DialogActions>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
        </Dialog>
               </CardContent>
              

   
    </Card>
    </Styleddiv>
    )
}

export default Landingpage
