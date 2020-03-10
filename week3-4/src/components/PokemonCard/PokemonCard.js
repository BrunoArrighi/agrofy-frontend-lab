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
}

export default PokemonCard;