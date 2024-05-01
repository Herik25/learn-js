const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('pear'));   // Output: -1

// Using the fromIndex parameter
console.log(fruits.indexOf('banana', 2)); // Output: -1
console.log(fruits.indexOf('banana', 1)); // Output: 1


// The indexOf() method returns the first index (position) of a specified value.
// The indexOf() method returns -1 if the value is not found.
// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).
// By default the search starts at the first element and ends at the last.
// Negative start values counts from the last element (but still searches from left to right).
// stx : array.indexOf(searchElement, fromIndex)
// - searchElement: The element to search for within the array.
// - fromIndex (Optional): The index at which to start the search. If omitted, the default is 0.