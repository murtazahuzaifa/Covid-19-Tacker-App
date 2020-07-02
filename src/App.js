import React from 'react';
import { NavBar, CasesReports, CountrySelector, Chart, Footer } from './components';
// import { Container  } from '@material-ui/core';
import './style/App.css';
// import Grid from '@material-ui/core/Grid';

export default () => {

    return (
    <div className='container' >
        <NavBar/>
        <CountrySelector />
        <CasesReports />
        <Chart/>
        <Footer/>
    </div >
    );
}