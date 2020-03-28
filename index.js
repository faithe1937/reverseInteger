// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    //turns it into a string
    .string()
    //split string into an array
    .split("")
    //reverse the array using reverse method hence the reason to turn string into an array because the js built in method only works on arrays
    .reverse()
    //turn back into string
    .join("");

  //write logic to return reversed variable as an integer and also in case n was a negative
  return parseInt(reversed) * Math.sign(n);

  //parseInt turns string into integer
  //Math.sign turns argument into a negative or vice versa
}

module.exports = reverseInt;
