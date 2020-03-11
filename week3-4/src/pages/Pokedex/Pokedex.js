import React, {useEffect, useState, Fragment} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import SearchBar from '../../components/SearchBar/SearchBar'



const Pokedex = (props) => {

  const [pokemones, setPokemones] = useState([]);   

    useEffect( () => {
     loadPokemones();
    }, []);

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

    

    const loadPokemones = () => {
        
            let listPokemon = [];
            for (let i = 1; i <= 150; i++) {
                listPokemon.push(loadPokemon(i));
            }

            Promise.all(listPokemon).then((values) => { 
                setPokemones(values);
                refreshPokemones(values);
            });
        
    }

    const refreshPokemones = (values) => {
      debugger;
      const pokeLocalStorage = JSON.parse(localStorage.getItem('PokeFavorite'));
      values.map((pokemon) => {
        if(pokeLocalStorage != null) {
        const pokemonFavorite = pokeLocalStorage.find(element => element.id === pokemon.id);
        
        if(pokemonFavorite === undefined || pokemonFavorite === null) {
          
        }
        else {
          pokemon.status = 1;
          pokemon.text = "Remove to favorite"
        }
      }
      })
      setPokemones(values);

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
          localStorage.removeItem('PokeFavorite',(pokemon));
      }
       setPokemones(pokemonesCopy);
      
  }

  const searchPokemones = (text) => {
    let filterPokemones = [...pokemones];
    filterPokemones = filterPokemones.filter((pokemon) => {
      return pokemon.name.indexOf(text) !== -1
    });
    setPokemones(filterPokemones);
}


  return (
  <Fragment>
  <div className="pokedexPage">
<SearchBar search={(searchText) => searchPokemones(searchText)}/>
    <PokemonCard listaPokemones={pokemones} updatePokemones={(id) => cambiarEstado(id)} />
  </div>
  </Fragment>
  )
};

export default Pokedex;
