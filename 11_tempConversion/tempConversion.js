// Source - https://stackoverflow.com/a
// Posted by Billy Moon, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-12, License - CC BY-SA 4.0

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}


const convertToCelsius = function (T) {
  return round(5 / 9 * (T - 32), 1);
};

const convertToFahrenheit = function (T) {
  return round(T * 1.8 + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};