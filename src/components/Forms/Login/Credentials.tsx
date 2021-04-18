import * as React from 'react'

import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    width: "50%",
    maxHeight: "100%",
    maxWidth:"100%",
  
    display: "inline",
    marginRight: '1%',
    marginLeft: '1%',
  },
  button: {
    color: theme.palette.getContrastText("#003D6A"),
    backgroundColor: "#003D6A",
    textAlign: "center",
    justifySelf: "center",
    justifyContent: "center",
    alignContent: "center",
    "&:hover": {
      backgroundColor: "#003054",
    },
  },


  //timeInformation styling for the entire grid container
  list: {
    maxWidth: "100%",
    marginRight: '1%',
    marginLeft: '1%',
    backgroundColor: theme.palette.background.paper,
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingRight: "5%",
    paddingLeft: "5%",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  cardcontent: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  //style applied
  gridItem: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "1%",
    paddingBottom: "1%",
    paddingLeft: "1%",
    paddingRight: "1%",
  },
  griditemText: {
    textAlign: 'left',
    justifyContent: "leftt",
  },
  griditemvalue: {
    textAlign: 'right',
    justifyContent: "right",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));

interface State {

  password: string;

  showPassword: boolean;
}

const Credentials = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });


  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };


  return (
<Grid className={classes.root}>
 
    <Grid
      container
      direction="column"
      justify="center"
      spacing={3}
      className={classes.list}
    >
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <TextField required id="standard-required" label="UserName" />
      </FormControl>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          required
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
     
<Button style={{paddingTop:"3%"}} variant="contained" color="primary">Login</Button>
<Typography>Forgot Password?</Typography>
    </Grid>
   
    </Grid>
  )
}

export default Credentials
