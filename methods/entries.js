const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const entries = Object.entries(person);

console.log(entries[0]); // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 30 ] ]

// The entries() method returns an Array Iterator object with key/value pairs:
// [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 30 ] ]
// The entries() method does not change the original array