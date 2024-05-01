const ages = [18, 20, 25, 30];

// Check if all ages are greater than or equal to 18
const isAdult = ages.every(age => age >= 18);

console.log(isAdult); // Output: true



// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array
// stx : array.every(function(currentValue, index, arr), thisValue)