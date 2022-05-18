function clickEv(event){
  event.target.style.backgroundColor = 'black';
  // console.log(event.target);

  // if(event.altKey){
  //   console.log('alt activado');
  // }
  // if (event.altKey && event.ctrlKey && event.shiftKey) {
  //   console.log('CTRL + SHIFT + ALT Activados');
  // }
}

function dobleClick(event){
  event.target.style.backgroundColor = 'blue';
}

function clickDerecho(event){
  event.preventDefault();
  console.log(event);
}


function drag(){
  console.log('drag');
}


// var img = null;


function dragStart(event){
  // img = event.target;
  event.dataTransfer.setData('perro', event.target.id);
  console.log('drag Start');
}


function dragEnd(){
  console.log('drag End');
}


function drop(event){
  // event.target.appendChild(img)

  var imgId = event.dataTransfer.getData('perro');
  var element = document.getElementById(imgId);

  if(event.target.dataset.target == imgId){
    event.target.appendChild(element);
  }

  // console.log(imgId);
  console.log(event);
  console.log('drop');
}


function dragOver(event){
  event.preventDefault();
}