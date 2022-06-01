let fruits = [
  'manzana1234',
  'pera',
  'platano',
  'sandia',
  'coco'
];

// fruits.splice(3); //eliminar elementos a partir de la posicion indicada
fruits.splice(1,2,'perro'); //eliminar elementos enrte las posiciones y agregar un nuevo elemento entre esas posiciones
console.log(fruits);

// console.log(fruits);
// // console.log(fruits.pop()); 
// let fruits2 = fruits.pop(); //eliminar el ultimo elemento y retornarlo


// console.log(fruits2);

// console.log(fruits);


// delete fruits[0]; //no usar
// console.log(fruits); 




// let fruits2 = fruits.shift(); //obtener el primer elemento
// console.log(fruits2);
// let fruits2 = fruits.unshift('perro'); //agregar un eleento al principio del array
// console.log(fruits.unshift('perro')); //regresa el indice de elementos que existen

// console.log(fruits);

// fruits = fruits.slice(1); //eliminar el array a partir de esa posicion
// console.log(fruits);

// console.log(fruits.slice(1,3)); //eliminar partes de un array

// console.log(fruits.toString());

// let string1 = fruits.join(' '); //crear un string de todos los elementos 

// console.log(string1);
// console.log(string1.indexOf('coco'));// indica la posicion en donde encuentra el primer patron indicado

// console.log(string1.lastIndexOf('a')); //lo mismo que indexof pero empezando por el final
// console.log(string1.includes('pera')); //devuelve un booleano si encuentra el patron indicado
// console.log(string1.trim()); //eliminar espacios en blanco de un string

// console.log(string1.length); //longitud de caracteres

// console.log(string1.slice(2,5)); //borrar fragmento del string

// console.log(string1.slice(-5,-1)); //borrar fragmento empezando por el final

// console.log(string1.substring()); //funciona casi igual que slice pero no acepta numeros negativos

// console.log(string1.replace('a','*')); //solo reemplaza el primer caracter que encuentre


// console.log(string1.toUpperCase());//Convertir string en mayusculas

// console.log(string1.toLowerCase()); //Convertir a minuscula

// console.log(string1.toLocaleUpperCase()); //Convertir las mayusculas segun la region


// let txt1 = 'perro';
// let txt2 = 'si';
// let txt4 = '         jhsagkfhd          ';

// let txt3 = txt1.concat('*',txt2); //concatenar en JS
// console.log(txt4);
// console.log(txt4.trim());

// console.log(txt1.charAt(4)); //obtener el caracter de la posicion indicada

// console.log(txt1.charCodeAt(4)); //obtener el caracter en unicode (UTC-8) o ascii