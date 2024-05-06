const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  person2: {
    firstName: "harsh",
    lastName: "parmar",
    age: 25,
  }
};

const entries = Object.entries(person);

console.log(entries); // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 30 ] ]

// // The entries() method returns an Array Iterator object with key/value pairs:
// // [ [ 'firstName', 'John' ], [ 'lastName', 'Doe' ], [ 'age', 30 ] ]
// // The entries() method does not change the original array


// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// const num = arr.every(el => el > 20)

// console.log(num);