const array = [2, 5, 9, 2];

// Finding the last index of 2
const lastIndex = array.lastIndexOf(2);

console.log(lastIndex); // Output: 3


// The lastIndexOf() method returns the last index (position) of a specified value.
// The lastIndexOf() method returns -1 if the value is not found.
// The lastIndexOf() starts at a specified index and searches from right to left (from the given postion to the beginning of the array).
// By defalt the search starts at the last element and ends at the first.
// Negative start values counts from the last element (but still searches from right to left).
// stx : array.lastIndexOf(searchElement[, fromIndex])
// - searchElement: The element to locate in the array.
// - fromIndex (optional): The index at which to start searching backward. Defaults to array.length - 1.