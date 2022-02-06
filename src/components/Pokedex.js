import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {POKEMON_API_URL, IMAGE_API_URL} from '../config/index'
import { Box, CircularProgress, Grid } from '@material-ui/core';
import PokeCard from './PokeCard';

function Pokedex() {
    const [pokedata, setPokeData] = useState([]);
    useEffect(()=>{
        axios.get(POKEMON_API_URL+"?limit=800").then((response)=>{
            console.log('data', response.data);
            if(response.status >= 200 && response.status <=300){
                const {results} = response.data;
                let newPokeData = [];
                console.log(results);

                results.forEach((pokemon,index)=>{
                    index = index+1;
                    let PokeObj = {
                        id: index,
                        url: IMAGE_API_URL+ index +".png",
                        name: pokemon.name
                    }

                    newPokeData.push(PokeObj);
                })
                console.log(newPokeData);
                setPokeData(newPokeData);
            }
        })
    },[])
    return (
        <Box>
            {pokedata? 
            <Grid container spacing={2} style={{marginTop:110}}>
                {pokedata.map((pokemon)=>{
                return <PokeCard pokemon={pokemon} key={pokemon.id} />
            })}
            </Grid>
            : <CircularProgress style={{marginTop: 100}} />}
        </Box>
    )
}

export default Pokedex;
