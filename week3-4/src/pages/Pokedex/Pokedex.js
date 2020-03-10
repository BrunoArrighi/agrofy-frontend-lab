import React from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import SearchBar from '../../components/SearchBar/SearchBar'

const Pokedex = () => (
  <div className="pokedex page">
    <SearchBar />
    <PokemonCard />
  </div>
);

export default Pokedex;
