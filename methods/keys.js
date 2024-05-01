const array = ['apple', 'banana', 'cherry'];

// Getting the iterator for array keys
const iterator = array.keys();

// Iterating over the keys and printing them
for (const key of iterator) {
  console.log(key);
}

// The keys() method returns an Array Iterator object with the keys of an array.
// The keys() method does not change the original array.
// stx : array.keys()
