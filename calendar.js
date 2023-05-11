const monthsInfo = require('./months.json');
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const increment = function(number) {
  return number + 1;
}

const getDates = function(noOfDays) {
  const dates = [];
  dates.length = noOfDays;
  return Array.from(dates.keys()).map(increment);
}

const cycler = function(elements) {
  let index = 0;
  return function() {
    const element = elements[index];
    index = (index + 1) % elements.length;
    return element;
  }
}

const cycleDays = cycler(days);
const cycleMonths = cycler(monthsInfo);

const showDate = function() {
  const {month, days} = cycleMonths(); 
  const dates = getDates(days);
  dates.forEach(function(date) {
    console.log(date, month, cycleDays());
  });
}

const calendar = function(noOfDays) {
  for(let day = 1; day <= noOfDays; day++) {
    showDate();
  }
}

calendar(process.argv[2]);
