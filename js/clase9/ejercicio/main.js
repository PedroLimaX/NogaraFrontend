
var screenValue = '';
var signo = '';
var totalAux=0;
var num1 = 0;
var num2= 0; 

function deleteLast(){
  var string = document.getElementsByClassName('screen')[0].textContent;
  str = string.slice(0, -1);
  updateScreen(str);
}

function clearEverything(){
  total = 0;
  screenValue = '';
  totalAux=0;
  updateScreen(screenValue);
  updateLog(screenValue)
}
function clearScreen(){
  screenValue = '';
  updateScreen(screenValue);
}

function resultado(){
  screenValue = parseFloat(total) + parseFloat(screenValue)
  updateScreen(screenValue);
}

function updateScreen(datos){
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerHTML = datos;
}

function updateLog(data){
  var log = document.getElementsByClassName('log')[0];
  log.innerHTML = data;
}

function numbers(num){
  screenValue = screenValue.toString() + num.toString();
  
  updateScreen(screenValue);
}

var total= 0;

function operacion(operador){
  var num1 = screenValue;
  
  if(operador = '+'){
    signo = num1;
  }
  else if(operador = '-'){
    signo= '-';
  }
  else if(operador = '*'){
    signo = '*';
  }
  else{
    signo = '/';
  }
}

function suma(operador){
  // screenValue = screenValue.toString() + operador.toString();
  // updateLog(screenValue);
  total = parseFloat(total) + parseFloat(screenValue);
  clearScreen();
  if(total!=0){
    totalAux = total;
    updateScreen(totalAux);
  }
}

function resta(operador){
  // screenValue = screenValue.toString() + operador.toString();
  total = parseFloat(total) - parseFloat(screenValue);
  clearScreen();
  updateScreen(total);
  // updateLog(screenValue);
}

function producto(operador){
  // screenValue = screenValue.toString() + operador.toString();
  total = parseFloat(total) * parseFloat(screenValue);
  clearScreen();
  if(total!=0){
    totalAux = total;
    updateScreen(totalAux);
  }
  // updateLog(screenValue);
}

function division(operador){
  screenValue = screenValue.toString() + operador.toString();
  // updateLog(screenValue);
}

function operacion(operador){
  screenValue = parseFloat(screenValue);
}