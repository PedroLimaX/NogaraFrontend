
function getValue(){
  var term = document.getElementById('search').value
  getImages(term)
  var element = document.getElementsByTagName('main')[0];

  while(element.hasChildNodes()){
    element.removeChild(element.lastChild);
  }
}

function getImages(term){
  fetch('https://pixabay.com/api/?key=27630728-5c2186f35592249403d47d7df&q=' + term + '&image_type=photo&pretty=true')
  .then(response=>response.json())
  .then(data=>createImg(data));
}

function createImg(img){

  console.log(img.hits.length);


  for (let index = 0; index < img.hits.length; index++) {
    var container = document.getElementsByTagName('main')[0];
    var element = document.createElement('div');
    element.innerHTML= `
      <div class="thumb"><a href="${img.hits[index].largeImageURL}" target="_blank"><img src="${img.hits[index].largeImageURL}"></a> </div>
      <div class="imgInfo">
      <p><span>Tags: </span>${img.hits[index].tags}</p>
      <p><span>Tipo: </span>${img.hits[index].type}</p>
      <p><span>Likes: </span>${img.hits[index].likes}</p>
      </div>
    `;

    container.appendChild(element);
  }
/*
  var container = document.getElementsByTagName('main')[0];
  var element = document.createElement('div');
  element.innerHTML= `
    <div class="thumb"><img src="${img.hits.previewURL}"> </div>
  `;

  container.appendChild(element);*/
}