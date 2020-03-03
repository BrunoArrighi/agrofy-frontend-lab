
    let pokemones = [];
    if(localStorage.length > 0){
    createCards();
    }
    else{
        getPokemones().then((response) => {
            pokemones = response;
            localStorage.setItem('pokemonesLocalStorage', JSON.stringify(pokemones));
            createCards();
               })
    }
   
    async function getPokemones(){
      
        for(i=1; i<= 150; i++){
            await
            fetch('https://pokeapi.co/api/v2/pokemon/'+i)
            .then((response) => {
               return response.json();
                  })
            .then((data) => {
                 
             
                const pokemon = {
                       name: data.name,
                       id: data.id,
                       image: data.sprites.front_default,
                       type: data.types.length === 2 ? data.types['0'].type.name + ', ' + data.types['1'].type.name : data.types['0'].type.name,
                       status: 0,
                       text: 'Add to favorite'
                   };
               pokemones.push(pokemon);
            
       
            })
           .catch(error=>
               {
                   console.error(error);
                   console.log(i);
               });
          
    }
    return pokemones;
}

function createCards(){
    let pokemones = JSON.parse(localStorage.getItem('pokemonesLocalStorage'));
    pokemones.forEach((pokemon) => {
const content = `      
               <div class="card">
                       <img src="${pokemon.image}" alt="Avatar">
                   <div class="container">
                       <h4><b>${pokemon.name}</b></h4>
                       <p>${pokemon.type}</p>
                       <button class="button" id="${pokemon.id}" onclick="FbotonOn(${pokemon.id})"> ${pokemon.text} </button>
                       </div>
               </div>`;
               container.innerHTML += content;

      })

}
    
        
 function FbotonOn(id) {
    let pokemones = JSON.parse(localStorage.getItem('pokemonesLocalStorage'));
    let result = pokemones.filter(p => p.id === id);
   let uno = document.getElementById(id);
   result[0].status === 0 ? uno.innerText = "Remove to favorite":uno.innerText = "Add to favorite";
   pokemones.forEach((poke, idx) => {
    if(poke.id === id)
    {
        if (poke.status === 0) {
         poke.status = 1;
         poke.text = 'Remove to favorite';
        }
        else {
            poke.status = 0;
            poke.text = 'Add to favorite';
        }
        localStorage.setItem('pokemonesLocalStorage', JSON.stringify(pokemones));   
        
        
    }
})
  
 };
 let pokemonSearch = [];
 function searchPokemones(){
    
    let pokemones = JSON.parse(localStorage.getItem('pokemonesLocalStorage'));
    let search = document.getElementsByName("search")[0].value;
    pokemonSearch = pokemones.filter(poke => isValid(poke.name, search));
    if(pokemonSearch.length > 0){
        cardSearch();
        displaySearch();
    }
 }
 function isValid(pokeName, search){
    if(pokeName.indexOf(search) === 0) return true;
    else return false;
 }



 function cardSearch() {
        pokemonSearch.forEach((poke, idx) => {
                const content = `      
                    <div class="card">
                       <img src="${poke.image}" alt="Avatar">
                        <div class="container">
                            <h6><b>${poke.name}</b></h6>
                            <p>${poke.type}</p>
                            <button class="button" id="${poke.id}" onclick="FbotonOn(${poke.id}, ${poke.status})"> ${poke.text} </button>
                       </div>
                    </div>`;
                containerSearch.innerHTML += content;
            
            })
    
 }

 function displaySearch(){  
    let div = document.getElementById("container");
    let divSearch = document.getElementById("containerSearch");
      div.style.display = "none";  
      divSearch.style.display = "flex"; 
  } 

  function displayTotal(){
    document.getElementsByName("search")[0].value = "";
    let div = document.getElementById("container");
    let divSearch = document.getElementById("containerSearch");
      div.style.display = "flex";  
      divSearch.style.display = "none"; 
      poke.removeChild(card);
  }



