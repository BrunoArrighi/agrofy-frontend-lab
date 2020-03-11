import React, {useState, useEffect, Fragment } from 'react';
import '../PokemonCard/PokemonCard.css';
import Button from '../Button/Button';

const PokemonFavorite = () => {

    const [pokemones, setPokemones] = useState([]);


    useEffect( () => {
        loadPokemones();
       }, []);

    const loadPokemones = () => {
        const pokeFavorite = JSON.parse(localStorage.getItem("PokeFavorite"));
        setPokemones(pokeFavorite);
    }



    const cambiarEstado = (id) => {

        let pokemonesCopy = [...pokemones];
        const local = JSON.parse(localStorage.getItem('PokeFavorite')) || [];
        const pokemon = pokemonesCopy.find(element => element.id === id); 
        if(pokemon.status === 0) {
            pokemon.status = 1;
            pokemon.text = "Remove to favorite";
            local.push(pokemon);
            localStorage.setItem('PokeFavorite', JSON.stringify(local));

            
        }
        else {
            pokemon.status = 0;
            pokemon.text = "Add to favorite";
            const index = local.findIndex(x => x.id === pokemon.id);
            if (index !== undefined) local.splice(index, 1);
            localStorage.setItem('PokeFavorite', JSON.stringify(local));
            const pokeIndex = pokemonesCopy.findIndex(x => x.id === pokemon.id);
            if (pokeIndex !== undefined) pokemonesCopy.splice(pokeIndex, 1);
        }
         setPokemones(pokemonesCopy);
        
    }




    if(pokemones != null) {
        return (
            <Fragment>
                
                <div className="row-card">
                    
                {pokemones.map((pokemon) =>
                
                    <div className="card">
                    <img src={pokemon.image} alt="Avatar" />
                <div className="container">
                    <h4><b>{pokemon.name}</b></h4>
                    <p>{pokemon.type}</p>
                   <Button callback={() => cambiarEstado(pokemon.id)} label={pokemon.text}/>
                 </div>
                 
                 
            </div>
                )}
            </div>
        </Fragment>
        );
    }
    else {
        return (
        <Fragment>
            <div>
                <h1>no tiene nada</h1>
            </div>
        </Fragment>
        )
    }
    
}

export default PokemonFavorite;