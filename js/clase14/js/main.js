/*const animals = [
  'Perro',
  'Gato',
  'Raton',
  'Oso',
  'Vaca'
];


const animals2 = {
  name1:'Perro',
  name2:'Gato',
  name3:'Raton',
  name4:'Oso',
  name5:'Vaca',
}

const user = 'Darker';
const user2 = 'Darker kjsdhf ksjhdfk khsfkd';



for (let index = 0; index < animals.length; index++) {
  
  console.log(animals[index]);
  
}


//For para objetos

for (const key in animals2) {
  console.log(key, animals2[key]);
}


//For para arrays
for (const iterator of animals) {
  console.log(iterator);
}

//For of funciona para strings y listas 
for (const iterator of user2) {
  console.log(iterator);
}


//for of destructurado

for (const [index,value] of user2) {
  console.log(index,value);
}*/

let animals={
  perro:'pugberto',
}

animals.gato='michi';

let perro = {
  patas:4,
  tipo: 'Terrestre',
  color: 'blanco',
  name: 'perro'
}

let gato = {
  patas:4,
  tipo: 'Terrestre',
  color: 'gris',
  name: 'gato'
}

//Crear objetos (Constructor)

/*
function Animal1(patas, tipo,color, name){
  let animal = {};
  aninmal.patas = patas;
  aninmal.tipo = tipo;
  aninmal.color = color;
  aninmal.name = name;
  return animal;
}

let pajaro = new Animal1(0,'ave','negro', 'pajaro');

*/

function Animal(coins, tipo,color, name){
  this.patas = coins;
  this.tipo = tipo;
  this.color = color;
  this.name = name;
  //metodos
  this.sound = function(){
    console.log('ninguno');
  }

  this.getCoins = () =>this.coins;
  // console.log(getCoins);

  this.setCoins = (val) => this.coins = val;

}


let pez = new Animal(0,'acuatico','azul', 'pez');

console.log(pez);