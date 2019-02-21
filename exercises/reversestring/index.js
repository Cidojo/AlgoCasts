// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverse = (str) => {
//   let counter = 0;
//   let reversedString = [];
//
//   while (counter < str.length) {
//     reversedString.unshift(str[counter]);
//     counter++;
//   }
//
//   return reversedString.join(``);
// }

// const reverse = (str) => {
//   return [...str].reverse().join(``);
// }

// const reverse = (str) => {
//   return str.split(``).reverse().join(``);
// }

// const reverse = (str) => {
//   let reversed = ``;
//
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//
//   return reversed;
// }

const reverse = (str) => [...str].reduce((rev, char) => char + rev, ``);

module.exports = reverse;
