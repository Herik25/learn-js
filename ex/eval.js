const str = "10 20 30 40 50 60 70 80 90 100";

const string = str.split(" ");

console.log(string);

// const arr = string.map((el, index) => {
//   if (index > 4 && index < 9) {
//     return el
//   }
// //   console.log(el);
// });

// const arr = string.filter((el, index) => {
//     if (index > 4 && index < 9) {
//         return el
//     }
// })


const arr2 = string.slice(4, 9);
console.log(arr2);
console.log(string);

// console.log(arr);
