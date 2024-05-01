const arr = [1, 2, 3];

// Double each number and flatten the result
const doubledAndFlattened = arr.flatMap(num => [num * 2]);
console.log(doubledAndFlattened); // Output: [2, 4, 6]

// Map and flatten, then remove odd numbers
const mappedAndFlattened = arr.flatMap(num => (num % 2 === 0 ? [num, num * 2] : []));
console.log(mappedAndFlattened); // Output: [2, 4]


// The flatMap() method maps all array elements and creates a new flat array.
// flatMap() creates a new array from calling a function for every array element.
// flatMap() does not execute the function for empty elements.
// flatMap() does not change the original array.
// stx : const newArray = arr.flatMap(callback(currentValue[, index[, array]])[, thisArg]);
// - arr: The array to map and flatten.
// - callback: A function that produces an element of the new array. It accepts the following arguments:
// - currentValue: The current element being processed in the array.
// - index (optional): The index of the current element being processed.
// - array (optional): The array flatMap() was called upon.
// - thisArg (optional): Value to use as this when executing callback.
// - thisArg (optional): Object to use as this when executing the callback functio
