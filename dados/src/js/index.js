/*** index.js ***/

var dados = document.getElementsByClassName('calcularResultado');

for(let index=0;index < dados.length; index++){

  dados[index].onclick = function calcularValor() {
   
    let dado = document.getElementById('#' + String(index+1));
    let numero = Math.floor(Math.random() * 6+1);
    dado.innerHTML = numero;
  };
}
