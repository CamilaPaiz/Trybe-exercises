const sum = require('./sum');


describe('Teste para validar a funcao sum',()=>{
    it('Verifica sum(4,5) retorna 9',()=>{
        expect(sum(4,5)).toBe(9);
    })
    it('Verifica sum(0,0) retorna 0',() =>{
        expect(sum(0,0).toBe(0));
    })
    it('Dispara erro caso receba como parâmetro uma string',() =>{
        expect(() =>sum(4,'5')).toThrowError();
        expect(() =>sum(4,'5')).toThrowError('parâmetro tem que ser número');
    })
})

