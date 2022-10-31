const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (entrants) => {
  const result = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      result.child += 1;
    } else if (age >= 18 && age < 50) {
      result.adult += 1;
    } else {
      result.senior += 1;
    }
  });
  return result;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const count = countEntrants(entrants);
  const entries = Object.entries(count);
  return entries.reduce((total, [nome, much]) => total + much * prices[nome], 0);
};

module.exports = { calculateEntry, countEntrants };
