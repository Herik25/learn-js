const numbers = [1, 2, 3, 4, 5];

// Filter out even numbers
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5]


// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// stx array.filter(function(currentValue, index, arr), thisValue)