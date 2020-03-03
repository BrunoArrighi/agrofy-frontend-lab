

    window.onscroll = () => {functionScroll()};

    function functionScroll() {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("nav").classList.add("scroll")
             
        } else {
            document.getElementById("nav").classList.remove("scroll")
        }

    }

 
    // console.log(pokemones);
   
    



    // function getPokemon() {
    //  for($i=1; $i<= 150; $i++){
          
    //          fetch('https://pokeapi.co/api/v2/pokemon/${i}');
    //       }
    //          pokemones.push(pokemon());
    //          //  console.log(pokemones);
    //     }
             
    // }
    //  const result = pokemones.map(pokemon => ({ name: pokemon.name, id: pokemon.id, image: pokemon.image, type: pokemon.type }));
    //            console.log(result);
     
      
      


