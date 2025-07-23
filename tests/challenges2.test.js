const {
    generatePhoneNumber,
    triangleCheck,
    hydrate
} = require('../src/challenges2');

describe('11 - Crie uma função de Número de telefone', () => {
    it('Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11', () => {
        expect(generatePhoneNumber([0, 1, 6])).toBe('Array com tamanho incorreto.');
        expect(generatePhoneNumber([])).toBe('Array com tamanho incorreto.');
        expect(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1, 10])).toBe('Array com tamanho incorreto.');
    });

    it('Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números da array seja menor que 0', () => {
        expect(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([3, -2, 1, 9, -5, 0, 7, 4, 0, 6, 1])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([1, 2, -3, 4, 0, 6, 7, 8, 9, 9, 0])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([-1, 2, 4, -4, 5, 6, 9, -8, 7, 3, 3])).toBe('não é possível gerar um número de telefone com esses valores');
    });

    it('Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array seja maior que 9', () => {
        expect(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([1, 2, 18, 0, 5, 3, 17, 8, 9, 1, 8])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([1, 2, 12, 4, 15, 5, 2, 8, 9, 10, 11])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([0, 2, 3, 14, 5, 7, 71, 1, 9, 0, 7])).toBe('não é possível gerar um número de telefone com esses valores');
    });

    it('Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array se repeti 3 vezes ou mais', () => {
        expect(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([1, 2, 8, 0, 5, 3, 7, 8, 9, 1, 8])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1])).toBe('não é possível gerar um número de telefone com esses valores');
        expect(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7])).toBe('não é possível gerar um número de telefone com esses valores');
    });

    it('Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números da array estejam de acordo com as restrições', () => {
        expect(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe('(12) 34567-8901');
        expect(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0])).toBe('(52) 81537-2890');
        expect(generatePhoneNumber([0, 2, 4, 3, 5, 5, 6, 8, 9, 2, 1])).toBe('(02) 43556-8921');
        expect(generatePhoneNumber([0, 2, 3, 4, 5, 8, 7, 9, 1, 0, 7])).toBe('(02) 34587-9107');
    });
});

describe('12 - Crie uma função de Condição de existência de um triângulo', () => {
    it('Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois', () => {
        expect(triangleCheck(16, 9, 2)).toBe(false);
        expect(triangleCheck(10, 3, 4)).toBe(false);
        expect(triangleCheck(6, 2, 2)).toBe(false);
    });

    it('Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas', () => {
        expect(triangleCheck(10, 13, 2)).toBe(false);
        expect(triangleCheck(12, 17, 4)).toBe(false);
        expect(triangleCheck(5, 10, 3)).toBe(false);
    });

    it('Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas', () => {
        expect(triangleCheck(10, 14, 8)).toBe(true);
        expect(triangleCheck(2, 3, 4)).toBe(true);
        expect(triangleCheck(16, 20, 30)).toBe(true);
    });
});

describe('13 - Crie uma função de Bem vindo ao Bar da Trybe!', () => {
    it('Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string', () => {
        expect(hydrate('1 cerveja')).toBe('1 copo de água');
        expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
        expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
        expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
        expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
});
