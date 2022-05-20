  var positionX = 0;
  var positionY = 0;

  var container = document.getElementsByTagName('body')[0];
  var limitX = container.offsetWidth;
  var limitY = container.offsetHeight;

  var pikasize = document.getElementById('pikaImg');
  var pikaWidth = pikasize.offsetWidth;
  var pikaHeigth = pikasize.offsetHeight;

document.addEventListener('keydown', moveLeft);

function moveLeft(event){
  if(event.keyCode == '37'){
    if (positionX > 0){
      positionX = positionX - 2;
      document.getElementById('pikaImg').style.left = positionX + 'px';
      //console.log(positionX, limitX);
    }
  }
}
window.addEventListener('keydown', moveRight);
function moveRight(event){
  if(event.keyCode == '39'){
    if(positionX < limitX-pikaWidth){
      positionX = positionX + 2;
      document.getElementById('pikaImg').style.left = positionX + 'px';
      //console.log(positionX, limitX);
    }
  }
}

window.addEventListener('keydown', moveDown);
function moveDown(event){
  if(event.keyCode == '40'){
    if(positionY < limitY-pikaHeigth){
      positionY = positionY + 2;
      document.getElementById('pikaImg').style.top = positionY + 'px';
      //console.log(positionY, limitY);
    }
  }
}

window.addEventListener('keydown', moveUp);
function moveUp(event){
  if(event.keyCode == '38'){
    if(positionY > 0){
      positionY = positionY - 2;
      document.getElementById('pikaImg').style.top = positionY + 'px';
      //console.log(positionY, limitY);
    }
  }
}