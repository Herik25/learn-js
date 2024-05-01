const array = [3, 4, 5];
const newLength = array.unshift(1, 2);

console.log(array); // Output: [1, 2, 3, 4, 5]
console.log(newLength); // Output: 5


// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
// stx : array.unshift(element1, element2, ..., elementN)
// - array: The array to which the elements will be added.
// - element1, element2, ..., elementN: Elements to add to the beginning of the array. You can specify one or more elements separated by commas.