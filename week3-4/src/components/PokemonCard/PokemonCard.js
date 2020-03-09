import React, { useEffect, useState } from 'react';
import './PokemonCard.css';


const PokemonCard = () => {
    const [pokemon, setPokemon] = useState(null);    
    //     useEffect( async() => {
    //         for(let i=1; i<151; i++) {
    //     const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+i);
    //     const data = await response.json();
    //     const [item] = data.results;
    //     pokemones.push({
    //         name: item.name,
    //         id: item.id,
    //         type: item.types[0].type.name,
    //         image: item.sprites.front_default
    //     })
    // }

    //     setPokemon(pokemones);
    // }, []);
    const pokemones = [];
    useEffect( () => {
     setPokemonFunction()
    }, []);
    const setPokemonFunction = async () => {
        
        for (let i = 1; i <= 150; i++) {
            const response = await  fetch('https://pokeapi.co/api/v2/pokemon/' + i)
            const data = await response.json()
            pokemones.push({
                name: data.name,
                id: data.id,
                type: data.types[0].type.name,
                image: data.sprites.front_default
            });
        }
        setPokemon(pokemones);
        
       
    }

     return pokemones.map(function(item, i){
        
        return <h1>{item.name}</h1>
      })
}

export default PokemonCard;