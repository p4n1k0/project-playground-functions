// Desafio 11
function generatePhoneNumber(array) {
  if (array.length < 11 || array.length > 11) return "Array com tamanho incorreto."
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) return "não é possível gerar um número de telefone com esses valores";
  }

  let repetidor = [];
  let repetidorMax = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let index2 = index + 1; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) repetidor.push(array[index]);
      for (let index = 0; index < repetidor.length; index += 1) {
        for (let index2 = index + 1; index2 < repetidor.length; index2 += 1) {
          if (repetidor[index] === repetidor[index2]) repetidorMax += 1;
        }
      }
      if (repetidorMax >= 3) return "não é possível gerar um número de telefone com esses valores";
    }
  }

  let phoneNumber;
  if (array.length === 11) phoneNumber = "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let trianguloValido = true;
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    trianguloValido = false;
    return trianguloValido;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    trianguloValido = false;
    return trianguloValido;
  }
  else {
    trianguloValido = true;
    return trianguloValido
  }
}

// Desafio 13
function hydrate(string) {
  let numeros = string.replace(/[^0-9]/g, ''); //esse trecho foi inspirado nesse site: https://www.horadecodar.com.br/2020/10/14/como-obter-apenas-os-numeros-de-uma-string-em-javascript/
  let soma = 0;
  let vetor = [];
  for (i = 0; i < numeros.length; i += 1) {
    vetor[i] = numeros[i];
  }
  for (i = 0; i < vetor.length; i += 1) {
    soma = soma + parseInt(vetor[i]);
  }
  if (soma === 1) return soma + " copo de água";
  else return soma + " copos de água";
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
