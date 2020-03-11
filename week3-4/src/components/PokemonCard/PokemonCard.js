
import React, { useEffect, useState, Fragment } from 'react';
import './PokemonCard.css';
import Button from '../Button/Button';



const PokemonCard = (props) => {


    return (
        <Fragment>
            
            <div>
                {props.listaPokemones.map((pokemon) =>
                <div className="row-card">
                    <div className="card">
                    <img src={pokemon.image} alt="Avatar" />
                <div className="container">
                    <h4><b>{pokemon.name}</b></h4>
                    <p>{pokemon.type}</p>
                   <Button callback={() => props.updatePokemones(pokemon.id)} label={pokemon.text}/>
                 </div>
                 </div>
                 
            </div>
                )}
            </div>
        </Fragment>
    );


}

export default PokemonCard;