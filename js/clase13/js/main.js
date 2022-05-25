/*ECMASCRIPT 6*/
/*
var perro = 'gato';  // se puede sobreescribir, ya no se debe usar, afecta el scope
let gato ='' //no afecta el scope del codigo
const URL = 'nogara.dev'; // no se puede cambiar su valor, se recomienda escribirla en mayuscula
console.log(perro);
*/

/*Arrow Functions*/
/*funcion normal*/ 
function sayHello(nombre){
  let msg = 'Hola' + nombre + 'estas pendejo';
  return(msg);
}



/*funcion anonima*/
/*
let  sayHello = function(nombre){
  let msg = 'Hola' + nombre + 'estas pendejo';
  return(msg);
}
*/





let daniel = sayHello('daniel');

/*Funcion Flecha*/
/*
let mensaje = (equis) =>{ //si solo tiene un parametro se pued equitar el parentesis
  let msg = 'Hola' + equis + 'estas pendejo';
  return(msg); //si es de una sola linea se quita el return y las llaves
}*/

let mensaje = equis => 'Hola ' + equis + ' estas pendejo';


/*Funcion flecha de mas de un parametro */
let perro = (equis1, equis2, ye1) => {
  console.log(equis1);
  console.log(equis2);
  console.log(ye1);
}

let drkr= mensaje('drkr');


let createUser = (user= 'pedro',email,pass,news=true,address=false) =>{
  let objUser = {};
  objUser.name = user;
  objUser.email = email;
  objUser.pass = pass;
  objUser.news=news;
  objUser.address = address
  return objUser
}


let darker = createUser('Darker X','drkr@gmail.com','12345',true,'Mi casa')

Math.random();

Math.floor(Math.random()* 10)