function Parrafos(txt){
  this.txt = txt;
  this.create = function(){
      let element = document.createElement('div');
      element.innerHTML =`
        <p> ${this.txt} </p>
      `;
      document.querySelector('body').appendChild(element);

  }
}

let par1 = '';