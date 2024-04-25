// var

// var y = 10;

// console.log(y);
// exampleFunction(y);
// exampleFunction()// Throws ReferenceError: y is not defined

// // let

let a = 10;
{
  // scope 1
  let b = 20;
  {
    // scope 2
    let c = 20;
    // console.log(a,b, c); // Outputs: 10
  }
}
console.log(a); // Outputs: 10
console.log(b); // Throws ReferenceError: b is not defined

// // const

const c = 10;
// const d = 20 // Throws TypeError: Assignment to constant variable.
