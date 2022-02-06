import { Box, CircularProgress, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import React, { Component } from 'react'
import {POKEMON_API_URL} from '../config/index'

const styles = (theme) => ({
    container: {
        height: "100vh",
        width:"100vw",
        backgroundColor: "black",
        color:"white",
        margin: "0px",
        marginTop: "100px",
        textAlign: "center",
        padding: "0"
    },

    hr: {
        backgroundColor: "blue",
        marginTop: "80px"
    },

    content: {
        paddingTop: "50px",
    },

    heading:{
        fontSize: "80px"
    },

    PokeImage:{
        height: "300px",
        width: "300px"
    }
})

    class PokeDetails extends Component {
    constructor(props){
        super(props)
            this.state = {
                pokemon: null
            }
    }

componentDidMount(){
    const {match} = this.props;
    console.log(match);
    console.log('match', match?.params);
    const {id} = match?.params;
    axios.get(POKEMON_API_URL+"/"+id).then((response)=>{
        if(response.status >=200 && response.status < 300){
            this.setState({pokemon:response.data})
        }
    });
}

    render() {
        const {classes} = this.props;
        const { pokemon } = this.state;
        if(pokemon){
            const {name,sprites} = pokemon;
            return (
                <div>
                    <Box className={classes.container}>
                        <Box className={classes.content}>
                            <Typography className={classes.heading}>{name}</Typography>
                            <img src={sprites.front_shiny} alt="Pokemon_Image" className={classes.PokeImage}/>
                            <hr className={classes.hr} />
                            <Grid container>
                                <Grid item md={1}>
    
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </div>
            )
        } else {
            return <CircularProgress />
        }
    }
}

export default withStyles(styles)(PokeDetails)