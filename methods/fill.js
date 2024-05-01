const numbers = [1, 2, 3, 4, 5];

// Fill the array with the value 0 from index 2 to 4 (exclusive)
numbers.fill(0, 2, 4);

console.log(numbers); // Output: [1, 2, 0, 0, 5]


// The fill() method fills specified elements in an array with a value.
// The fill() method overwrites the original array.
// stx : array.fill(value, start, end)