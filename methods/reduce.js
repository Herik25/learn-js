const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15 (1 + 2 + 3 + 4 + 5)



// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// stx : array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// - callback: A function to execute on each element in the array, taking four arguments:
// - accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// - currentValue: The current element being processed in the array.
// - index (Optional): The index of the current element being processed in the array.
// - array (Optional): The array reduce() was called upon.
// - initialValue (Optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the first element in the array will be used and skipped.