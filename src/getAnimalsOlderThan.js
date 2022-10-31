const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, idade) => {
  const name = species.filter((tipo) => tipo.name === animal);
  return name.every(({ residents }) => residents.every(({ age }) => age >= idade));
};
console.log(getAnimalsOlderThan('lions', 5));
module.exports = getAnimalsOlderThan;
