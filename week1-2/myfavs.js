

    let myFavs = document.getElementById("myFavs");
    let pokemones = JSON.parse(localStorage.getItem('pokemonesLocalStorage'));
    let result = pokemones.filter(p => p.status === 1);
        result.forEach((poke) => {
            const content = `      
                    <div class="card" id="${poke.id}">
                       <img src="${poke.image}" alt="Avatar">
                        <div class="container">
                            <h4><b>${poke.name}</b></h4>
                            <p>${poke.type}</p>
                            <button class="button" id="${poke.id}" onclick="FbotonOn(${poke.id}, ${poke.status})"> ${poke.text} </button>
                       </div>
                    </div>`;
                myFavs.innerHTML += content;
        })



                
 let FbotonOn = (id) => {
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
    refreshMyFavs(id);
 };

 let refreshMyFavs = (id) => {
    let poke = document.getElementById("myFavs");
    let card = document.getElementById(id);

    poke.removeChild(card);
   
}


 