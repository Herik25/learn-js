const array = [1, 2, 3, 4, 5];

const slicedArray = array.slice(1, 4);
console.log(slicedArray); // Output: [2, 3, 4]

console.log(array); // Output: [1, 2, 3, 4, 5] (original array is unchanged)



// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.
// stx : array.slice(start, end)
// - start: Optional. The zero-based index at which to begin extraction. If negative, it indicates an offset from the end of the array. (For example, -2 means the second element from the end of the array).
// - end: Optional. The zero-based index before which to end extraction. slice() extracts up to, but not including, end. If omitted, slice() extracts to the end of the array. If negative, it indicates an offset from the end of the array.