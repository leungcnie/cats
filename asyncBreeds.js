// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, calledOnceDone) {
  // console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile, can't reach outside
    // FIX: add callback param to function, pass data into callback
    if (error) {
      calledOnceDone(undefined);
    } else {
      calledOnceDone(data);
    }
  });
};

// CHANGE 1: move console.log to new function
const printBreedDetails = (breed) => {
  console.log('Return Value: ', breed);
}

// CHANGE 2: add param for callback
// breedDetailsFromFile('Bombay', printBreedDetails);

module.exports = breedDetailsFromFile;
// ------------------------------
// OLD IMPROPER IMPLEMENTATION
// ------------------------------

// const breedDetailsFromFile = function(breed) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
//     if (!error) return data;
//   });
//   // ISSUE: Attempting to return data out here will also not work.
//   //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
// };

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!


