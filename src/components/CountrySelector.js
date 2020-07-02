import React from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({

    formControl: {
        "margin": theme.spacing(1),
        "width": '100%',
    },
    mainGrid:{
        margin:'20px auto 0 auto'
    },
    inputLabel:{
        color:'white',
        fontSize:'larger',
    },
    select:{
        fontWeight:'bold',
        fontSize:'large'
    }

}))

export default function () {

    const classes = useStyle();

    const [country, setCountry] = React.useState('');

    const countries = ["Global", 'Pakistan', 'India', "China"];

    return (
        <Grid xs={12} sm={6} container item  className={classes.mainGrid}>
            <FormControl className={classes.formControl}>
                <InputLabel id="select-country-label" className={classes.inputLabel}>Select Country</InputLabel>
                <Select
                    className={classes.select}
                    labelId="select-country-label"
                    id="select-country"
                    // value={country}
                    defaultValue={countries[0]}
                    onChange={(event) => { setCountry(event.target.value) }}
                >
                    {countries.map((option, i) => <MenuItem key={i} value={option}>{option}</MenuItem>)}
                </Select>
            </FormControl>
        </Grid>
    );
}