const data = require('../data/zoo_data');

const days = Object.keys(data.hours);

function office(play) {
  const { open, close } = data.hours[play];
  const fechado = (open === 0 && close === 0);
  return fechado ? 'CLOSED' : `Open from ${open}am until ${close}pm`;
}

const exhibi = (play) => {
  const places = data.species.reduce((attractions, { name, availability }) => (
    availability.includes(play) ? [...attractions, name] : attractions
  ), []);
  return places.length === 0 ? 'The zoo will be closed!' : places;
};

const schedules = (play) => ({
  [play]: {
    exhibition: exhibi(play),
    officeHour: office(play),
  },
});

const weekCronogram = () => (
  days.reduce((schedule, play) => (
    {
      ...schedule,
      ...schedules(play),
    }
  ), {})
);

const animas = (animalName) =>
  data.species.find(({ name }) => name === animalName).availability;

function getSchedule(scheduleTarget) {
  const animals = data.species.map((specie) => specie.name);
  if (![...days, ...animals].includes(scheduleTarget)) {
    return weekCronogram();
  }
  if (days.includes(scheduleTarget)) {
    return schedules(scheduleTarget);
  }
  return animas(scheduleTarget);
}

module.exports = getSchedule;
