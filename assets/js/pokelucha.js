alert("hola");
function Pokemon(nombre,color,puntosAtaque){
  this.nombre = nombre;
  this.color = color;
  this.nivelDeAmistad = 0;
  this.vida = 100;
  this.puntosAtaque = puntosAtaque;

  this.pelear = function(pokemonObjeto){
  pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque
  console.log(pelear);
  }
}
var pokemons = [];
function crearPokemon(nombre,color,puntosAtaque){
  var nombrePokemon = document.getElementById('nombrePokemon');
  var colorPokemon = document.getElementById('colorPokemon');
  var puntosAtaquePokemon =document.getElementById('puntosAtaque');
   var pokemon = new Pokemon(nombrePokemon.value,colorPokemon.value,parseInt(puntosAtaquePokemon.value));
  pokemons.push(pokemon);
  mostrarPokemons();
}
function mostrarPokemons(){
  var selecionPokemons = document.getElementById('almacen');
  var selecionPokemons2 = document.getElementById('almacen2');


    var opcionNueva = document.createElement("option");
    opcionNueva.innerText = pokemons[pokemons.length-1].nombre;
    selecionPokemons.appendChild(opcionNueva);

    var opcionNueva = document.createElement("option");
    opcionNueva.innerHTML = pokemons[pokemons.length-1].nombre;
    selecionPokemons2.appendChild(opcionNueva);
  }
// 
// function pelear(){
//   var  puntosAtaque= document.getElementById('puntosAtaque');
//   var contrincante1= document.getElementById('almacen').value;
//   var contrincante2 = document.getElementById('almacen2').value;
//
//
// }
