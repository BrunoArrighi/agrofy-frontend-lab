import React, { useState} from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';

const Api = () => {
  const [list, setList] = useState([
  {
      name: 'pokemon1',
      id: 1,
      type: 'fight'
  },
  {
      name: 'pokemon2',
      id: 2,
      type: 'fight'
  },
  {
      name: 'pokemon3',
      id: 3,
      type: 'fight'
  }
 
]);
// for(let i=1; i<151; i++) {
// fetch('https://pokeapi.co/api/v2/pokemon/'+i)
//       .then(res => res.json())
//       .then(
//         (data) => {
//             const pokemon = {
//                 name: data.name,
//                 id: data.id,
//                 image: data.sprites.front_default,
//                 type: data.types.length === 2 ? data.types['0'].type.name + ', ' + data.types['1'].type.name : data.types['0'].type.name,
//                 status: 0,
//                 text: 'Add to favorite'
//             };
//             pokemones.push({pokemon});
          
   

//      })
//           }
        return  list.map(item => <PokemonCard item={item}/>);
            
       
      }

export default Api;