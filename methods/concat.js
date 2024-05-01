// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const children = arr1.concat(arr2, arr3); // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus', 'Robin' ]

// console.log(children);

// // The concat() method concatenates (joins) two or more arrays.
// // The concat() method returns a new array, containing the joined arrays.
// // The concat() method does not change the existing arrays.


const a1 = [1, 2, 3, 4, 5]
const a2 = ["a", "b", "c", "d"]
const a3 = ["karan", "harsh"]
const a4 = ["dell", "hp"]

const children = a1.concat(a2.concat(a3, a1), a4)

console.log(children);