import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    AppBar: {
        backgroundColor: 'red',
    },
    Link: {
        textDecoration: "none",
    },
    Typography: {
        color: "white",
        fontSize: "50px",
        padding: "20px"
    }
}))

function AppNavigator() {
    const classes = useStyles();
    return (
        <AppBar className={classes.AppBar} position="fixed">
            <Toolbar>
                <Link to="/" className={classes.Link}>
                    <Typography className={classes.Typography}>Pokedex</Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}

export default AppNavigator
