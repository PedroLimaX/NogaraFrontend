// /*Arrays o arreglos*/

// var edad = 12;
// var nombre = 'Darker';
// var casado = false;
// var telefono = 123456789;
// var hijos = false;

var frutas = [
  'manzana',
  'pera', 
  'naranja', 
  'platano'
];

// console.log(frutas);

// frutas=['toroja', 'kiwi'];

// console.log(frutas);

// frutas[0] = 'toronja';

// console.log(frutas);

// frutas[2]= 'coco';
// frutas[3]='piña';
// console.log(frutas);

// alert('Ingresa los datos que se piden');
// var datosPerfil = [];
// datosPerfil[0] = prompt('Edad');
// datosPerfil[1] = prompt('Nombre');
// datosPerfil[2] = prompt('¿Estas casado? (s/n)');
// datosPerfil[3] = prompt('Telefono');
// datosPerfil[4] = prompt('¿Tienes hijos? (s/n)');


// datosPerfil[0] = parseInt(datosPerfil[0])
// if (datosPerfil[2] == 's' || datosPerfil[2] == 'S') {
//   datosPerfil[2] = true;
// }
// else{
//   datosPerfil[2] =false;
// }

// datosPerfil[3]=parseInt(datosPerfil[3]);

// if (datosPerfil[4] == 's' || datosPerfil[4] == 'S') {
//   datosPerfil[4] = true;
// }
// else{
//   datosPerfil[4] =false;
// }

// console.log(datosPerfil);


for(var index = 0; index <4; index++){
  console.log(frutas[index]);
}

var imagenes = [
  'img/buho.png',
  'img/gato.png',
  'img/leon.png',
  'img/mono.png',
  'img/perro.png',
  'img/serpiente.png',
  'img/unicornio.png',
  'img/zorro.png',
];

for(var index = 0; index < imagenes.length; index++ ){
  document.write('<img src="' + imagenes[index] +'" width=10%>')
}