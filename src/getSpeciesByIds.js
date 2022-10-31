const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...param) => species.filter(({ id }) => param.includes(id));

module.exports = getSpeciesByIds;
