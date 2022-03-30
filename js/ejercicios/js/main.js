
// var aciertos = prompt('Ingresa la cantidad de aciertos');

// if(aciertos>=30 && aciertos<40){
//     console.log('Tu calificacion es 6');
// }
// if(aciertos>=40 && aciertos<50){
//     console.log('Tu calificacion es 8');
// }
// if(aciertos>=50){
//     console.log('Tu calificacion es 10');
// }
// else{
//     console.log("Tu calificacion es reprobatoria");
// }



// ----------------------Ejercicio 1 ------------------------------------
// Crear algoritmo para remover los elementos repetidos en el array:
// [1,5,2,3,4,7,1,2,3,5,9,7,5,3,2,0,7,4,1,3,2,4]

/*

var array = [1,5,2,3,4,7,1,2,3,5,9,7,5,3,2,0,7,4,1,3,2,4];
console.log(array);
var filtro=[];
var comparador = 0;
    for (var index = 0; index < array.length; index++) {
        if (array[comparador]!=filtro[index]) {
            filtro[comparador]=array[comparador];
            comparador++;
        }
    }
    console.log(filtro);

*/

// ----------------------Ejercicio 2 ------------------------------------
// Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5
// por “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15),
// por la palabra “fizzbuzz”.

/*

var array=[];
for(var index = 1; index<=100; index++){
     array[index]=index;
     if(array[index] % 3 ==0 && array[index] % 5 == 0){
        array[index]='fizzbuzz';
     }
     else if(array[index] % 3 == 0){
        array[index]='fizz';
     }
     else if(array[index] % 5 == 0){
        array[index]='buzz';
     }
}
console.log(array);

*/

// ----------------------Ejercicio 3 ------------------------------------
// Ordenar de mayor a menor el siguiente array:
// [1,8,4,7,3,6,5,2,0]

/*

var array=[1,8,4,7,3,6,5,2,0];
console.log('desordenado', array);
var ordenado=[];
var reserva = 0;
for (var index = 0; index < array.length; index++) {
    if(array[index]<array[index+1]){
        reserva = array[index];
        array[index]=array[index+1];
        array[index+1]=reserva;
    }
}
console.log('ordenado',array);

*/