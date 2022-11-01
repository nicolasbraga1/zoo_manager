const data = require('../data/zoo_data');

const isResponsibleFor = (funcionario) =>
  data.employees.find((nome) => nome.id === funcionario).responsibleFor;

const getAnimal = (animalSpecies) =>
  data.species.find((raça) => raça.id === animalSpecies);

const isOldest = (tipo) => tipo.residents
  .reduce((subject1, subject2) => (subject1.age > subject2.age ? subject1 : subject2), {});

const getOldestFromFirstSpecies = (id) => {
  const assigned = getAnimal(isResponsibleFor(id)[0]);
  const { age, name, sex } = isOldest(assigned);
  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
