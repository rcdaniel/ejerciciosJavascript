/*** index.js ***/

/**
 * Crea un array de 15 elementos no repetibles
 * entre 0 y 90.
 */

function createCard() {

  let numbers = _.range(0,90);
  numbers = _.shuffle(numbers);
  numbers = numbers.splice(0,15);
  return numbers;
}

function showCard(element, card) {

  card.forEach(value => {

    let casilla = document.createElement('div');
    casilla.innerHTML = value;
    let claseCustom = 'numero' + value;
    casilla.className = 'numero ' + claseCustom;
    element.appendChild(casilla);
  });
}

function newNumber() {

  let bola = _.random(0,90);
  console.log('Sale el: ' + bola);
  
  var indexJugador = numerosJugador.indexOf(bola);
  if (indexJugador > -1) {
    numerosJugador.splice(indexJugador, 1);
  }

  var indexCpu = numerosCpu.indexOf(bola);
  if (indexCpu > -1) {
    numerosCpu.splice(indexCpu, 1);
  }

  console.log(numerosJugador);
  console.log(numerosCpu);
  
  let numeroABuscar = '.numero' + bola;
  let coincidencia = document.querySelectorAll(numeroABuscar);
  coincidencia.forEach(element => {
    element.className = '';
    element.className = 'numeroTachado';
    console.log('Tachado el número: ' + bola);
  });

  let terminaPartida = checkWinner();
  if(terminaPartida){
    console.log('El ganador es: ' + terminaPartida);
    document.querySelector('.lanzarAleatorio').remove();
  }

}


function checkWinner() {
  
  if(numerosJugador.length == 0){
    return 'Jugador';
  }else if(numerosCpu.length == 0){
    return 'Cpu';
  }else {
    return null;
  }

}

var jugador = document.getElementsByClassName('jugador')[0];
var numerosJugador = createCard();
var cpu = document.getElementsByClassName('cpu')[0];
var numerosCpu = createCard();
showCard(jugador, numerosJugador);
showCard(cpu, numerosCpu);

document.querySelector('.lanzarAleatorio').onclick = newNumber;
