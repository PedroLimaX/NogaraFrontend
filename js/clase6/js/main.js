'use strict' //te indica un error de codigos

var user='Darker';
var interruptor = true;
var btn = document.getElementsByTagName('div')[0];
var btn2 = document.getElementsByTagName('div')[1];
var colors = ['deeppink', 'green', 'blue', 'blueviolet', 'orange' , 'red'];
var index = 0;

function si(){
  if(interruptor){
    btn2.style.background = 'green';
    btn2.style.border='none';
    btn2.style.boxShadow='none';
    btn2.style.color='white';
    interruptor = false;
  }
  else{
    btn2.style.background = 'red';
    btn2.style.border='none';
    btn2.style.color='white';
    interruptor = true;
  }
}


function arcoiris(){
  btn.style.backgroundColor = colors[index];
  btn.style.color='white';
  index++;
  if (index==colors.length){
    index=0;
  }
}

// Hoisting : el navegador ordena el codigo
//scope: identificar en donde se puede usar una variable