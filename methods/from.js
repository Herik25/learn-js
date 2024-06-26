// Convert a string to an array of characters
const str = 'hello';
const chars = Array.from(str);
console.log(chars); // Output: ['h', 'e', 'l', 'l', 'o']

// Convert a Set to an array
const set = new Set([1, 2, 3, 4]);
const arrayFromSet = Array.from(set);
console.log(arrayFromSet); // Output: [1, 2, 3, 4]


// The Array.from() method returns an array from any object with a length property.
// The Array.from() method returns an array from any iterable object.
// stx Array.from(arrayLike[, mapFunction[, thisArg]])
// - arrayLike: An array-like or iterable object to convert to an array.
// - mapFunction (Optional): A map function to call on every element of the array-like object.
// - thisArg (Optional): An object to use as this when executing the mapFunction.