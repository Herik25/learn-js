const numbers = [1, 2, 3, 4, 5];
numbers.splice(2 /* index */, 2 /* number of elements */);

console.log(numbers); // Output: [1, 2, 5]


// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// stx : array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// - start: The index at which to start changing the array. If negative, it will begin that many elements from the end of the array. If greater than the length of the array, start will be set to the length of the array.
// - deleteCount (Optional): The number of elements to remove from the array. If omitted or if greater than array.length - start, all elements from start to the end of the array will be deleted.
// - item1, item2, ... (Optional): The elements to add to the array, beginning at the start index. If no elements are specified, splice() will only remove elements.