const array = ['apple', 'banana', 'orange'];
console.log(array.join());       // Output: apple,banana,orange
console.log(array.join(', '));   // Output: apple, banana, orange
console.log(array.join(' - '));  // Output: apple - banana - orange

// The join() method returns an array as a string.
// The join() method does not change the original array.
// Any separator can be specified. The default is comma (,).
// stx : array.join(separator)
// - array: The array whose elements will be joined into a string.
// - separator (optional): Specifies a string to separate each element of the array. If omitted, the array elements are separated with a comma by default.