const array = [1, 2, 3, 4, 5];

// Log each element of the array to the console
array.forEach((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});

// Double each element of the array
const doubledArray = [];
array.forEach(element => {
  doubledArray.push(element * 2);
});
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]


// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// array.forEach(callback(currentValue [, index [, array]])[, thisArg]);
//  - array: The array that forEach() is being applied to.
//  - callback: A function that is called once for each element in the array. It accepts the following arguments:
//  - currentValue: The current element being processed in the array.
//  - index (optional): The index of the current element being processed.
//  - array (optional): The array forEach() was called upon.
//  - thisArg (optional): Value to use as this when executing callback.
//  - thisArg (optional): Object to use as this when executing the callback function.