const {
    compareTrue,
    calcArea,
    splitSentence,
    concatName,
    footballPoints,
    highestCount,
    catAndMouse,
    fizzBuzz,
} = require('../src/challenges');

describe('1 - Função usando operador &&', () => {
    it('Retorne false quando chamar a função compareTrue com um parâmetro de valor false e outro de valor true', () => {
        expect(compareTrue(false, true)).toBe(false);
        expect(compareTrue(true, false)).toBe(false);
    });

    it('Retorne false quando chamar a função compareTrue com dois parâmetros de valor false', () => {
        expect(compareTrue(false, false)).toBe(false);
    });

    it('Retorne true quando chamar a função compareTrue com dois parâmetros de valor true', () => {
        expect(compareTrue(true, true)).toBe(true);
    });
});

describe('2 - Função que calcule a área do triângulo', () => {
    it('Retorne o valor 250 quando a função calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50', () => {
        expect(calcArea(10, 50)).toBe(250);
    });

    it('Retorne o valor 5 quando a função calcArea é chamada com o parầmetro base com o valor 5 e o parâmetro height com o valor 2', () => {
        expect(calcArea(5, 2)).toBe(5);
    });

    it('Retorne o valor 25.5 quando a função calcArea é chamada como parâmetro base com o valor 51 e o parâmetro height com o valor 1', () => {
        expect(calcArea(51, 1)).toBe(25.5);
    });
});

describe('3 - Função que divida a frase', () => {
    it('Retorne o valor [\'go\', \'Tarick\'] se a função receber a string \'go Tarick\'', () => {
        expect(splitSentence('go Tarick')).toEqual(['go', 'Tarick']);
    });

    it('Retorne o valor [\'vamo\', \'que\', \'vamo\']. se a função receber a string \'vamo que vamo\'', () => {
        expect(splitSentence('vamo que vamo')).toEqual(['vamo', 'que', 'vamo']);
    });

    it('Retorne o valor [\'foguete\'] se a função receber a string \'foguete\'', () => {
        expect(splitSentence('foguete')).toEqual(['foguete']);
    });
});

describe('4 - Função que use concatenação de strings', () => {
    it('Retorne \'Paolillo, Lucas\' quando o parâmetro passado na funcão concatName seja [\'Lucas\', \'Cassiano\', \'Ferraz\', \'Paolillo\']', () => {
        expect(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])).toBe('Paolillo, Lucas');
    });

    it('Retorne \'ré, foguete\' quando o parâmetro passado na funcão concatName seja [\'foguete\', \'tem\', \'ré\']', () => {
        expect(concatName(['foguete', 'tem', 'ré'])).toBe('ré, foguete');
    });

    it('Retorne \'captain, captain\' quando o parâmetro passado na funcão concatName seja [\'captain\', \'my\', \'captain\']', () => {
        expect(concatName(['captain', 'my', 'captain'])).toBe('captain, captain');
    });
});

describe('5 - Função que calcule a quantidade de pontos no futebol', () => {
    it('Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates', () => {
        expect(footballPoints(14, 8)).toBe(50);
    });

    it('Retorne 5 pontos quando o time tenha uma vitória e 2 empates', () => {
        expect(footballPoints(1, 2)).toBe(5);
    });

    it('Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates', () => {
        expect(footballPoints(0, 0)).toBe(0);
    });
});

describe('6 - Função que calcule a repetição do maior número', () => {
    it('Retorne 2 quando o parâmetro passado na função highestCount seja [1, 9, 2, 3, 9, 5, 7]', () => {
        expect(highestCount([1, 9, 2, 3, 9, 5, 7])).toBe(2);
    });

    it('Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1]', () => {
        expect(highestCount([0, 4, 4, 4, 9, 2, 1])).toBe(1);
    });

    it('Retorne 1 quando o parâmetro passado na função highestCount seja [-2, -2, -1]', () => {
        expect(highestCount([-2, -2, -1])).toBe(1);
    });

    it('Retorne 3 quando o parâmetro passado na função highestcount seja [0, 0, 0]', () => {
        expect(highestCount([0, 0, 0])).toBe(3);
    });
});

describe('7 - Função de caça ao rato', () => {
    it('Retorne a string \'cat2\' caso a função catAndMouse receba o parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato', () => {
        expect(catAndMouse(0, 3, 2)).toBe('cat2');
    });

    it('Retorne a string \'cat1\' caso a função catAndMouse receba o parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato', () => {
        expect(catAndMouse(10, 4, 22)).toBe('cat1');
    });

    it('Retorne a string \'os gatos trombam e o rato foge\' caso a função catAndMouse receba o parâmetros onde gatos estejam na mesma distância do rato', () => {
        expect(catAndMouse(1, 0, 2)).toBe('os gatos trombam e o rato foge');
    });
});

describe('8 - Função fizzBuzz', () => {
    it('Retorne as strings [\'bug!\', \'fizzBuzz\', \'bug!\', \'fizz\', \'fizzBuzz\'] quando é passado os parâmetros [2, 15, 7, 9, 45] para função fizzBuzz', () => {
        expect(fizzBuzz([2, 15, 7, 9, 45])).toEqual(['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']);
    });

    it('Retorne as strings [\'bug!\', \'fizz\'] quando é passado os parâmetros [7, 9] para função fizzBuzz', () => {
        expect(fizzBuzz([7, 9])).toEqual(['bug!', 'fizz']);
    });

    it('Retorne as strings [\'fizz\', \'buzz\'] quando é passado os parâmetros [9, 25] para função fizzBuzz', () => {
        expect(fizzBuzz([9, 25])).toEqual(['fizz', 'buzz']);
    });
})
