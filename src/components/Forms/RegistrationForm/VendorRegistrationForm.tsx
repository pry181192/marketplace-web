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

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { List, ListItem } from '@material-ui/core';







const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        maxHeight: "100%",
        height: "auto !important",
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
const VendorRegistrationForm = () => {
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

    const VendorSpecificField = () => {

        return (
            <List
            >


                <ListItem><TextField className={clsx(classes.margin, classes.textField)} required id="standard-required" label="First Name" />

                    <TextField className={clsx(classes.margin, classes.textField)} required id="standard-required" label="Last Name" /></ListItem>

                <ListItem>

                    <TextField className={clsx(classes.margin, classes.textField)} required id="standard-required" label="Enter your email or phone number" />

                </ListItem>
                <ListItem>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel htmlFor="standard-adornment-password">Enter New Password</InputLabel>
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
                </ListItem>

                <ListItem>
                    <FormControl className={clsx(classes.margin, classes.textField)}>
                        <InputLabel>Shop Url</InputLabel>

                        <Input
                            type="url" name="url" id="url"
                            placeholder="https://example.com"

                        />
                    </FormControl>
                </ListItem>
            </List>


        )

    }

    return (

        <VendorSpecificField />


    )
}

export default VendorRegistrationForm;
