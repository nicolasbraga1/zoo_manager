const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count', 'elephants')).toBe(4);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names', 'elephants')).toContain('Jefferson');
  });
  it('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge', 'elephants')).toBeCloseTo(10.5);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location', 'elephants')).toBe('NW');
  });
  it('Retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity', 'elephants')).toBe(5);
  });
  it('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability', 'elephants')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Retorna undefined caso não seja passado nenhum parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Retorna string caso parâmetro seja um ojeto vazio', () => {
    expect(handlerElephants({}, 'elephants')).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna null caso o parâmetro seja inválido', () => {
    expect(handlerElephants('bla', 'elephants')).toBeNull();
  });
});
