// Desafio 11
// ref: https://github.com/tryber/sd-020-a-project-playground-functions/pull/62/files
function zeroOrNine(index) {
  if (index < 0 || index > 9) {
    return true;
  }
}

function telephone(ind, array) {
  let count = 0;

  for (let i of array) {
    if (i === 1) {
      count += 1;
    }
    if (count >= 3) {
      return true;
    }
  }
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of array) {
    if (zeroOrNine(index) || telephone(index, array)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}
    ${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
