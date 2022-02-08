// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if(valor1 === true && valor2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calcArea = (base * height) / 2;
  return calcArea;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let resultado = frase.split(" ");
  return resultado;
}
console.log(splitSentence("go Trybe"));


// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let primeiro = nomes[0];
  let ultimo = nomes[nomes.length - 1];
  nomes = ultimo + ", " + primeiro;
  return nomes;
  
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui;
  pontos = (wins * 3) + (ties * 1);
  return pontos; 
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6

function highestCount(numeros) {
  // seu código aqui
  let maiorValor = Math.max.apply(Math, numeros);
  let contador = 0;

  for(let i = 0; i < numeros.length; i += 1){
    if(numeros[i] === maiorValor){
      contador += 1
    }
  }
  return contador;
}    

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));



// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
