<<<<<<< HEAD
import React, { useEffect, useState, Fragment } from 'react';
import './PokemonCard.css';
import Button from '../Button/Button';


const PokemonCard = () => {
    const [pokemones, setPokemones] = useState([]);    
    const [load, setLoad] = useState(true);

    useEffect( () => {
     loadPokemons();
    }, [load]);

    const loadPokemon = (id) => {
        return new Promise((resolve, reject) => {
            const response = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
                response.json().then((data) => {
                    return resolve({
                        name: data.name,
                        id: data.id,
                        type: data.types.length === 2 ? data.types['0'].type.name + ', ' + data.types['1'].type.name : data.types['0'].type.name,
                        image: data.sprites.front_default,
                        status: 0,
                        text: 'Add to favorite'
                    });
                });
            });
        });  
    }

    const loadPokemons = () => {
        if (load) {
            let listPokemon = [];
            for (let i = 1; i <= 150; i++) {
                listPokemon.push(loadPokemon(i));
            }

            Promise.all(listPokemon).then((values) => { 
                setPokemones(values);
                setLoad(false);
            });
        }
    }

    

    const cambiarEstado = () => {
        
    }

     
      

 

    return (
        <Fragment>
            
            <div>
                {pokemones.map((pokemon) =>
                <div className="row-card">
                    <div className="card">
                    <img src={pokemon.image} alt="Avatar" />
                <div className="container">
                    <h4><b>{pokemon.name}</b></h4>
                    <p>{pokemon.type}</p>
                   <Button callback={() => cambiarEstado(pokemon)} label={pokemon.text}/>
                 </div>
                 </div>
                 
            </div>
                )}
            </div>
        </Fragment>
    );
=======
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
>>>>>>> 29d80e73a2a0176423a03553ebbff9a3f9c13e3a
}

export default PokemonCard;