// Desafio 11
// ref: https://github.com/tryber/sd-020-a-project-playground-functions/pull/62/files
function generatePhoneNumber(array) {
  // seu código aqui
  
  let mensagem = 'não é possível gerar um número de telefone com esses valores';
  if (array.length !== 11) return 'Array com tamanho incorreto.';
  for (let index of array) {
    if (zeroOuNove(index) || telefone(index, array)) return mensagem;
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
  function zeroOuNove(index) {
    if ((index < 0) || (index > 9)) return true;
  }

  function telefone(index, array) {
    let contador = 0;
    for (let indice of array) {
      if (indice === index) contador += 1;
    }
    if (contador >= 3) return true;
  }
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
