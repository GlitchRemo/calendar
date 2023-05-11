const {toNumber} = require("./lib/array-utils.js");
const {getWeeks, getMonth, renderMonth} = require("./src/month.js");

const main = function() {
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const [month, year] = toNumber(process.argv.slice(2));

  const weeks = getWeeks(month - 1, year);
  const monthAbbrev = getMonth(month - 1);
  const header = [monthAbbrev, year];

  console.log(renderMonth([header, days, ...weeks]));
}

main();
