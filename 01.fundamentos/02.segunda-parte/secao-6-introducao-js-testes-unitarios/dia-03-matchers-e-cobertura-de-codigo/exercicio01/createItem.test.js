const createItem = require('./createItem');

describe('a função createItem', () => {
    const createItemTest = createItem('Copo', 'kg',2,2);
    const expectCreateItem = {name: 'Copo', unit: 'kg', price: 2, quantity: 2};
    expect(createItemTest).toEqual(expectCreateItem);

  it('utiliza zero como quantidade padrão', () => {
    const createItemZero = createItem('Banana', 'kg', 1);
    expect(createItemZero).toHaveProperty('quantity', 0);
  });
  
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });
  
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem( 1, 'kg', 1, 1)).toThrow('O nome do item deve ser uma string');
  });
  
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('Banana', 'kg', -1, 1)).toThrow('O preço do item deve ser maior que zero');
  });
  
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('Banana', 'kg', 0, 0)).toThrow()
    }); 
});