
import React, { useEffect, useState, Fragment } from 'react';
import './PokemonCard.css';
import Button from '../Button/Button';



const PokemonCard = (props) => {


    return (
        <Fragment>
            
            <div className="row-card">
                {props.listaPokemones.map((pokemon) =>
                
                    <div className="card" key={pokemon.id}>
                    <img src={pokemon.image} alt="Avatar" />
                <div className="container">
                    <h4><b>{pokemon.name}</b></h4>
                    <p>{pokemon.type}</p>
                   <Button callback={() => props.updatePokemones(pokemon.id)} label={pokemon.text}/>
                 </div>
                 
                 
            </div>
                )}
            </div>
        </Fragment>
    );


}

export default PokemonCard;