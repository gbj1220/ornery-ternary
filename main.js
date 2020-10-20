// Your code below
const isItColin = function (name) {
  return name === 'Colin' ? 'Yes, that is Colin.' : 'No, that is not Colin.'
}

const isHot = function (temp) {
  return temp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.'
}

const helloThere = function (name) {
  return name.length < 6 ? 'Hello, ' + name : 'Hi, ' + name
}

const goodbyeYou = function (name) {
  return name ? 'Goodbye, Colin' : 'Goodbye, stranger'
}

const darkAndStormyNight = function (str, rainFall) {
  return str === 'dark' && rainFall > 0.5 ? 'It was a dark and stormy night.' : `My usual opening doesn't apply, I guess.`
}


// Our code below; do not touch!
if (typeof isItColin === 'undefined') {
  isItColin = undefined;
}

if (typeof isHot === 'undefined') {
  isHot = undefined;
}

if (typeof helloThere === 'undefined') {
  helloThere = undefined;
}

if (typeof goodbyeYou === 'undefined') {
  goodbyeYou = undefined;
}

if (typeof darkAndStormyNight === 'undefined') {
  darkAndStormyNight = undefined;
}

module.exports = {
  isItColin,
  isHot,
  helloThere,
  goodbyeYou,
  darkAndStormyNight,
}
