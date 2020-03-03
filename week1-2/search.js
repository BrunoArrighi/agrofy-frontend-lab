
  let pokemones = JSON.parse(localStorage.getItem('pokemonesLocalStorage'));

function searchPokemones() {
    document.getElementById("searchPokemones").innerHTML = name.filter(pokemones.name);
  }

  


