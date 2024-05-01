const obj = {
  value: 42,
  valueOf() {
    return this.value;
  },
};

console.log(obj.valueOf()); // Output: 42

// example 2
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log("My Array: " + myArray);

// The valueOf() method returns the array itself.
// The valueOf() method does not change the original array.
// fruits.valueOf() returns the same as fruits.
