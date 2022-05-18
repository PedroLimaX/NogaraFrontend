
var screenValue = '';
var totalAux=0;

function clearScreen(){
  screenValue = '';
  updateScreen(screenValue);
}

function updateScreen(datos){
  var screen = document.getElementsByClassName('screen')[0];
  screen.innerHTML = datos;
}

function numbers(num){
  screenValue = screenValue.toString() + num.toString();
  updateScreen(screenValue);
}

var total= 0;

function suma(){
  total = parseFloat(total) + parseFloat(screenValue);
  clearScreen();
  if(total!=0){
    totalAux = total;
    updateScreen(totalAux);
  }
  console.log(total);
}