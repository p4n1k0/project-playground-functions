const {
    compareTrue,
    calcArea,
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
})
