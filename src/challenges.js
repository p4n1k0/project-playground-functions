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
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max#retornando_o_maior_elemento_de_um_array
  // seu código aqui
  let maiorValor = Math.max.apply(Math, numeros); // acha maior valor dentro da array
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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let mensagem = "";
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if(distanciaCat1 < distanciaCat2){
    mensagem = "cat1";
  }else if(distanciaCat2 < distanciaCat1){
    mensagem = "cat2";
  }else{
    mensagem = "os gatos trombam e o rato foge"
  }
  return mensagem;
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let array = [];
  
  for(let i = 0; i < numeros.length; i += 1){
    if(numeros[i] % 3 === 0 && numeros[i] % 5 !== 0){
      array.push("fizz");
    }else if(numeros[i] % 3 !== 0 && numeros[i] % 5 === 0){
      array.push("buzz");
    }else if(numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
      array.push("fizzBuzz");
    }else{
      array.push("bug!");
    }     
  }
  return array;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
// seu código aqui
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(mensagem0) {
  let mensagem1 = mensagem0.replace(/[a]/g, '1');
  let mensagem2 = mensagem1.replace(/[e]/g, '2');
  let mensagem3 = mensagem2.replace(/[i]/g, '3');
  let mensagem4 = mensagem3.replace(/[o]/g, '4');
  let mensagem5 = mensagem4.replace(/[u]/g, '5');


  return mensagem5;
}

console.log(encode("hi there"));

function decode(mensagem0) {
  // seu código aqui 
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  let mensagem1 = mensagem0.replace(/[1]/g, 'a');
  let mensagem2 = mensagem1.replace(/[2]/g, 'e');
  let mensagem3 = mensagem2.replace(/[3]/g, 'i');
  let mensagem4 = mensagem3.replace(/[4]/g, 'o');
  let mensagem5 = mensagem4.replace(/[5]/g, 'u');

  return mensagem5;
 }

 console.log(decode('h3 th2r2'));

// Desafio 10
function techList(tecnologias, name) {
  // seu código aqui
  // referência e ajuda de Carlos Dal Soler | Turma 16 | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  tecnologias.sort()
  let objeto = [];
  for (let i = 0; i < tecnologias.length; i += 1){
    objeto.push ({
      tech: tecnologias[i],
      name: name,
    })
  }
  if(tecnologias.length === 0){
  objeto = 'Vazio!'
  }
  return objeto;

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
