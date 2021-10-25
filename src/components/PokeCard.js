import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react'
import {makeStyles} from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>(
    {
        Grid: {
            backgroundColor: "#00FFFF",
            alignContent: "center"
        },
        Card: {
            backgroundColor: "#DEC6D3",
            cursor: "pointer",
            color: "white",
            "&:hover": {
                backgroundColor:"#cd5b45",
                opacity: "0.5"
            }
        },

        CardMedia: {
            margin: "auto",
            height: 130,
            width: 130
        },

        CardContent: {
            textAlign: "center"
        },

        Typography: {
            fontSize: "30px"
        },

        Link: {
            textDecoration: "none"
        }

    }
))

function PokeCard(props) {
    const classes = useStyles();
    const {pokemon} = props; 
    const {name,url,id} = pokemon;
    console.log(pokemon);

    return (
        <Grid item xs ={12} sm={2} className={classes.Grid}>
            <Link to={'/pokemon/' + id} className={classes.Link}>
                <Card className={classes.Card}> 
                    <CardMedia image={url} className={classes.CardMedia}/>
                    <CardContent className={classes.CardContent}>
                        <Typography className={classes.Typography}>{name}</Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
        
    )
}

export default PokeCard
