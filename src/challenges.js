// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return phrase.split(' ');
}

// Desafio 4
function concatName(words) {
  return words[words.length - 1] + ', '.concat(words[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6

function highestCount(numbers) {
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max#retornando_o_maior_elemento_de_um_array
  // seu código aqui
  let maxValue = Math.max.apply(Math, numbers); // acha maior valor dentro da array
  let count = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maxValue) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  } else {
    return "os gatos trombam e o rato foge"
  }
  return '';
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let array = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 !== 0) {
      array.push("fizz");
    } else if (numbers[i] % 3 !== 0 && numbers[i] % 5 === 0) {
      array.push("buzz");
    } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      array.push("fizzBuzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
}

// Desafio 9
// seu código aqui
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function encode(mensagem) {
  let mensagem1 = mensagem.replace(/[a]/g, '1');
  let mensagem2 = mensagem1.replace(/[e]/g, '2');
  let mensagem3 = mensagem2.replace(/[i]/g, '3');
  let mensagem4 = mensagem3.replace(/[o]/g, '4');
  let mensagem5 = mensagem4.replace(/[u]/g, '5');

  return mensagem5;
}

function decode(mensagem) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  let mensagem1 = mensagem.replace(/[1]/g, 'a');
  let mensagem2 = mensagem1.replace(/[2]/g, 'e');
  let mensagem3 = mensagem2.replace(/[3]/g, 'i');
  let mensagem4 = mensagem3.replace(/[4]/g, 'o');
  let mensagem5 = mensagem4.replace(/[5]/g, 'u');

  return mensagem5;
}

// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  // referência e ajuda de Carlos Dal Soler | Turma 16 | https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  technologies.sort();
  let array = [];
  for (let i = 0; i < technologies.length; i += 1) {
    array.push({
      tech: technologies[i],
      name: name,
    });
  }
  if (technologies.length === 0) {
    array = 'Vazio!';
  }
  return array;

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
