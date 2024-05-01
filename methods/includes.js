const fruits = ['apple', 'banana', 'orange', 'grape'];

console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('pear'));   // Output: false

// Using the start parameter
console.log(fruits.includes('banana', 2)); // Output: false
console.log(fruits.includes('banana', 1)); // Output: true

// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.
// stx : array.includes(element, start)
// - element: The element to search for within the array.
// - start (Optional): The position in the array at which to begin the search. If omitted, the default is 0.