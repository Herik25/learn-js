// function foo(num) {
//   // console.log("foo: " + num);
//   // keep track of how many times `foo` is called
//   this.count++;
//   console.log(this.count);
// }
// foo.count = 0;
// var i;
// for (i = 0; i < 10; i++) {
//   if (i > 5) {
//     foo(i);
//   }
// }
// // foo: 6
// // foo: 7
// // foo: 8
// // foo: 9
// // how many times was `foo` called?
// console.log(foo.count);

// const name = "harsh2"
// const lang = "javascript"

// function tag(strings, ...args) {
//     console.log(strings);

// }

// tag`hello ${name} this is ${lang}`

// const  {add}  = require("./add.js")
// const {pi} = require("./add.js")
// console.log(add(1, 2));
// console.log(pi);

// import { add, sub, multi } from './add.js'
// import div from './devide.js';

// // console.log(multi(2, 2));
// console.log(div(4, 2));

// add.test.js
// const add = require('./add');

// test('adds 2 + 3 to equal 5', () => {
//   const logger = { log: jest.fn() }; // Using a spy here
//   const result = add(2, 3, logger);

//   expect(result).toBe(5); // Assertion: result should be 5
//   expect(logger.log).not.toHaveBeenCalled(); // Logger should not be called
// });

// test('adds 6 + 5 to equal 11 and logs', () => {
//   const logger = { log: jest.fn() }; // Using a spy here
//   const result = add(6, 5, logger);

//   expect(result).toBe(11); // Assertion: result should be 11
//   expect(logger.log).toHaveBeenCalledWith('Sum is greater than 10'); // Check if logger was called correctly
// });
