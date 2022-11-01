const data = require('../data/zoo_data');

const { species } = data;

const everyANimal = () => (
  species.reduce((counter, { name, residents }) => ({
    ...counter,
    [name]: residents.length,
  }), {})
);

const countAnimals = (animal) => {
  if (!animal) return everyANimal();
  const raça = animal.specie;
  const genero = animal.sex;
  const arr = species.find((param) => param.name === raça);
  const filt = arr.residents.filter((param) => param.sex === genero);
  if (genero === undefined) {
    return arr.residents.length;
  }
  return filt.length;
};

module.exports = countAnimals;
