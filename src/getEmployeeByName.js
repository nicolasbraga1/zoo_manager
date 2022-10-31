const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
};

console.log(getEmployeeByName('Wishart'));
console.log(getEmployeeByName('Emery'));
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
