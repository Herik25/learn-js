const numbers = [10, 20, 30, 40, 50];

// Find the index of the first number greater than 25
const index = numbers.findIndex(num => num > 25);

console.log(index); // Output: 2 (index of 30)


// The findIndex() method executes a function for each array element.
// The findIndex() method returns the index (position) of the first element that passes a test.
// The findIndex() method returns -1 if no match is found.
// The findIndex() method does not execute the function for empty array elements.
// The findIndex() method does not change the original array.
// stx array.findIndex(function(currentValue, index, arr), thisValue)s