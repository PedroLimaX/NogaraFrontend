// function msg(user){
//   var msg2 = 'Hola ' + user;
//   return msg2;
// }

// var mensaje1 = msg('drkr');
// console.log(mensaje1);

var allUsers = [];

function getDataInput(input){
  return input.value;
}

function createUser(){
  var newUser= [];
  var inputs = document.getElementsByTagName('input');
  for (let index = 0; index < inputs.length; index++) {
    newUser.push(getDataInput(document.getElementsByTagName('input')[index]));
  }
  return newUser;
}


function saveAll(){
  allUsers.push(createUser());
}