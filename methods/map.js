const numbers = [1, 4, 9];

// Using map() to create a new array with each element squared
const squaredNumbers = numbers.map((num) => {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 16, 81]


// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// stx : array.map(callback(currentValue[, index[, array]])[, thisArg])
// - callback: Function to execute on each element in the array, taking three arguments:
// - currentValue: The current element being processed in the array.
// - index (optional): The index of the current element being processed.
// - array (optional): The array that map() is being applied to.
// - thisArg (optional): Value to use as this when executing callback.