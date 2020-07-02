import React from 'react';
import {Line} from 'react-chartjs-2';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({

    mainGrid:{
        justifyContent:'center',
        margin:'20px auto',
        backgroundColor:'rgba(255,255,255,0.5)',
        borderRadius: '20px',
        padding:'5px'
    }
}))

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
        data: [50,60,70,80,55,33,44],
        label: 'Infected',
        borderColor: '#3333ff',
        fill: true,
      }, {
        data: [50,30,70,50,75,33,94],
        label: 'Deaths',
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
      },
  ]
};

export default function(){

    const classes = useStyle();

    return (
      <Grid className={classes.mainGrid} xs={12} sm={11} md={9} container item>
        <h2>Statistics</h2>
        <Line className data={data} />
      </Grid>
    );
};