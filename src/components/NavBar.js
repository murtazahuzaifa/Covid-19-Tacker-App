import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    toolBar:{
        display:'flex',
        justifyContent: 'space-between',
    },
    gitHub: {
        marginRight: theme.spacing(-2),
    },
    title: {
        ...theme.typography.h5,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" className={classes.title}>
                    COVID-19 Tracker App
                    </Typography>
                <IconButton  color="inherit" aria-label="github-link">
                    <GitHub className={classes.gitHub} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
