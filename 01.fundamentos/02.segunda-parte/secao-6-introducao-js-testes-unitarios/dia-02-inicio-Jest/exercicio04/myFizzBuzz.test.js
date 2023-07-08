const myFizzBuzz = require("./myFizzBuzz");

describe('testa a função fizzBuzz',() => {
    it('deve retornar um valor esperado de acordo com o parametro recebido', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('2')).toBeFalsy();
    });
});