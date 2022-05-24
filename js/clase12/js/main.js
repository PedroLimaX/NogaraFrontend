var idPokemon=1;
var items=10;


function initPokemons(){
  for (let index = 1; index <= items; index++) {
    getPokemon();
    idPokemon++;
  }
}

function getPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon/' + idPokemon)
  .then(response=>response.json())
  .then(data=>crearPokemon(data));
}

function crearPokemon(pokemon){
  console.log(pokemon);

  var container = document.getElementsByTagName('main')[0];
  var element = document.createElement('div');
  element.innerHTML= `
    <div class="contImg"><img src="${pokemon.sprites.front_default}"> </div>
    <div class="info"> 
      <span>${pokemon.id} </span> - ${pokemon.name} 
      <div class="type"> ${pokemon.type}
    </div>
  `;

  container.appendChild(element);
}