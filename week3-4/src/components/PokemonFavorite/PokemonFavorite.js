import React, {useState, Fragment } from 'react';
import '../PokemonCard/PokemonCard.css';
import Button from '../Button/Button';

const PokemonFavorite = () => {

    const [pokemones, setPokemones] = useState([]);


    debugger;
    const pokeFavorite = localStorage.getItem("PokemonFavorite");
    setPokemones(pokeFavorite);



    const cambiarEstado = (id) => {
        let pokemonesCopy = [...pokemones];
        const pokemon = pokemonesCopy.find(element => element.id === id); 
        if(pokemon.status === 0) {
            pokemon.status = 1;
            pokemon.text = "Remove to favorite";
            localStorage.setItem('PokeFavorite', JSON.stringify(pokemon));
        }
        else {
            pokemon.status = 0;
            pokemon.text = "Add to favorite";
            localStorage.removeItem('PokeFavorite',(pokemon));
        }
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
               <Button callback={() => cambiarEstado(pokemon.id)} label={pokemon.text}/>
             </div>
             </div>
             
        </div>
            )}
        </div>
    </Fragment>
    );
}

export default PokemonFavorite;