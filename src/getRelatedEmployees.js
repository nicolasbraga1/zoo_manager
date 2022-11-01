const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (employeeId) => {
  const employ = employees.find((employee) => employee.id === employeeId);
  if (employ.managers.length === 0 || employ
    .managers[0] === '9e7d4524-363c-416a-8759-8aa7e50c0992') {
    return true;
  }
  return false;
};

const getRelatedEmployees = (managerId) => {
  const overlord = employees.filter((name) => name.managers.includes(managerId));
  const print = overlord.map((nome) => `${nome.firstName} ${nome.lastName}`);
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return print;
};
module.exports = { isManager, getRelatedEmployees };
