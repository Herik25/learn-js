const numbers = [1, 2, 3, 4, 5];

// Find the first number greater than 3
const foundNumber = numbers.find(num => num > 3);

console.log(foundNumber); // Output: 4


// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
// stx array.find(function(currentValue, index, arr),thisValue)