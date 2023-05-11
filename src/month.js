const {chunk} = require("../lib/array-utils.js");

const isLeapYear = function(year) {
  const isDivisibleBy4 = year % 4 === 0;
  const isDivisibleBy100 = year % 100 === 0;
  const isDivisibleBy400 = year % 400 === 0;

  return (isDivisibleBy400 + isDivisibleBy100 + isDivisibleBy4) % 2 === 1;
}

const getMonth = function(month) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
}

const getLastDate = function(month, year) {
  if(month === 1 && isLeapYear(year)) return 29;
  const lastDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return lastDates[month];
}

const justifyRight = function(day) {
  return day.toString().padStart(2);
}

const renderWeek = function(week) {
  return week.map(justifyRight).join(" ");
}

const renderMonth = function(month) {
  return month.map(renderWeek).join('\n');
}

const getWeeks = function(month, year) {
  const totalDays = getLastDate(month, year);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const padding = new Array(firstDayOfMonth).fill('');
  const dates = new Array(totalDays).fill().map(function(_, i) { return i + 1; });

  return chunk([...padding, ...dates], 7, 0);
}

exports.getWeeks = getWeeks;
exports.getMonth = getMonth;
exports.renderMonth = renderMonth;
