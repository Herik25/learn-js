const words = ["Hello", " ", "World", "!"];

const concatenated = words.reduceRight((accumulator, currentValue) => accumulator + currentValue, "");

console.log(concatenated); // Output: "!World Hello"



// The reduceRight() method executes a reducer function for each array element.
// The reduceRight() method works from right to left.
// The reduceRight() method returns a single value: the function's accumulated result.
// The reduceRight() method does not execute the function for empty elements.
// stx : array.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// - callback: A function to execute on each element in the array, taking four arguments:
// - accumulator: The accumulator accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// - currentValue: The current element being processed in the array.
// - index (Optional): The index of the current element being processed in the array.
// - array (Optional): The array reduceRight() was called upon.
// - initialValue (Optional): A value to use as the first argument to the first call of the callback. If no initial value is supplied, the last element in the array will be used and skipped.