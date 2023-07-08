
const { encode, decode } = require("./encodeDecode");

describe('testa a função encodeDecode', () => {
    it('a funçao decode é definida', () => {
        expect(encode).toBeDefined();
    });

    it('encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });

    it('converte apenas a vogal "a" no número 1', () => {
        expect(encode('ana')).toEqual('1n1');
    });

    it('converte a vogal "e" no número 2', () => {
        expect(encode('ele')).toEqual('2l2')
    });

    it('converte a vogal "i" no número 3', () => {
        expect(encode('xixi')).toEqual('x3x3');
    });

    it('converte a vogal "o" no número 4', () => {
        expect(encode('bobo')).toEqual('b4b4');
    });

    it('converte a vogal "u" no número 5', () => {
        expect(encode('nul')).toEqual('n5l');
    });

    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);
    });

    it('a função decode é definida', () => {
        expect(decode).toBeDefined();
    });

    it('decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });

    it('converte apenas o número 1 na vogal a', () => {
        expect(decode('1n1')).toEqual('ana');
    });

    it('converte apenas o número 2 na vogal e', () => {
        expect(decode('am2')).toEqual('ame');
    });

    it('converte apenas o número 3 na vogal i', () => {
        expect(decode('3r')).toEqual('ir');
    });

    it('converte apenas o número 4 na vogal o', () => {
        expect(decode('4v4')).toEqual('ovo');
    });

    it('converte apenas o número 5 na vogal u', () => {
        expect(decode('t5rma')).toEqual('turma');
    });

    it('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(decode('ludmila').length).toEqual(7);
    });
});