//Se puede acceder a ciertas propiedades de un elemento de forma diferente a document.getElement
var values = '';
var notas = '';

var btn = document.getElementsByTagName('button')[0];

function clearInput(){
  document.getElementById('entrada').value = '';
}


function imprimir(){
  values = document.getElementById('entrada').value;
  var container = document.getElementsByClassName('cards')[0];
  
  var element = document.createElement('div');
  element.innerHTML = '<span>' + values + '</span>'
  container.appendChild(element)

  // console.log(values);
  
  // notas = notas + '<div>' + values + '</div>';
  // container.innerHTML = notas;
  
  clearInput();
}

var ruta ='';
var coleccion = '';

var saveBtn = document.getElementsByTagName('button')[1];

function galeria(){
  ruta = document.getElementById('archivo').value;
  var container = document.getElementsByClassName('cards')[1];
  console.log(ruta);
  var image = document.createElement('div');
  image.innerHTML = '<img src="' + ruta + '" </img>';
  container.appendChild(image);
}