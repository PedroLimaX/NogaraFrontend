/*var num1 = 435;
var num2 = 345;
var num3 = 854;
if (num1 > num2 || num1 < num3){
  console.log('Si');
}
*/

/*Solo puede entrar hombres mayores de edad con mas de 40 dolares*/ 

// var generoCliente = prompt('Ingresa la inicial de tu genero (H o M)');
// var dinero = prompt('Ingresa la cantidad de dinero que tienes');
// var edad = prompt('Ingresa tu edad');

// if (generoCliente == 'H' || generoCliente == 'h') {
//     if(dinero >=40 ){
//         if(edad>=18){
//           console.log('Cumples con todos los requisitos, Puedes acceder al Bar');
//         }
//         else{
//           console.log('Eres hombre y tienes dinero suficiente, pero no tienes la edad suficiente')
//         }
//     }
//     else{
//       console.log('Eres hombre, pero no tienes el dinero suficiente')
//     }
// }
// else{
//   console.log('No eres hombre, no puedes entrar');
// }


var aciertos = prompt('Ingresa un numero xd')
aciertos = parseFloat(aciertos);
switch (aciertos) {
  case 30:
    console.log('Si');
    break;

  default:
    console.log('no');
    break;
}