
var aciertos = prompt('Ingresa la cantidad de aciertos');

if(aciertos>=30 && aciertos<40){
    console.log('Tu calificacion es 6');
}
if(aciertos>=40 && aciertos<50){
    console.log('Tu calificacion es 8');
}
if(aciertos>=50){
    console.log('Tu calificacion es 10');
}
else{
    console.log("Tu calificacion es reprobatoria");
}