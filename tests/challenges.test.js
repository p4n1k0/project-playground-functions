const {
    compareTrue,
    calcArea,
    splitSentence,
    concatName,
    footballPoints,
} = require('../src/challenges');

describe('1 - Crie uma função usando operador &&', () => {
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

describe('2 - Crie uma função que calcule a área do triângulo', () => {
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

describe('3 - Crie uma função que divida a frase', () => {
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

describe('4 - Crie uma função que use concatenação de strings', () => {
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

describe('5 - Crie uma função que calcule a quantidade de pontos no futebol', () => {
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
