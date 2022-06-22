// window.history.back(); sirve para regresar al path anterior (como las flechas de regresar o adelantar)
//window.history.forward();


// window.history.go(); //array para dirigirse a una ruta guardada en el historial


// document.getElementsByTagName('div')[0];

// document.querySelectorAll('div'); //seleccionar el primer elemento

document.querySelector('div').addEventListener('click', ()=>{
    if(navigator.geolocation){
        console.log('si');
        navigator.geolocation.getCurrentPosition(showGeo);
    }
}); //seleccionar todos los elementos

function showGeo(position){
    console.log(position);
}

// navigator.userAgent //sirve para identificar el navegador que se esta usando

window.innerHeight;
window.innerWidth;

screen.width;
//------------------------------------------
//VUE v2 curso: bluuweb

// React v16
//-------------------------------------------

//metodos: screen, window, navigator, document

// eventos .resize()