// console.log(1);
// console.log(2);
// setTimeout(() => {
//     console.log("5 sec");

// }, 5000);
// setTimeout(() => {
//     console.log("2 sec");
// }, 2000);
// console.log(3);
// console.log(4);

// setInterval(() => {
//     console.log("i am an interval");
// }, 1000)

// function display(num) {
//     console.log(num);
// }
// function sum(a, b, sum) {
// //   console.log(a + b);
//   sum(a + b);
// }

// sum(1, 2, display);

// function hello() {
//     console.log("hello");
//     setTimeout(() => {
//         hello()
//     }, 2000)
// }

// hello()

//  const interval = setTimeout(() => {
//     console.log("soryy Baby");
//  }, 5000);

// function stopInterval() {
//     clearTimeout(interval)
// }

// const promise = new Promise((res, rej) => {
//     res("database access =")
// })

// promise.then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err)).finally(() => {
//     console.log("this is finally block");
// })

async function fetchData() {
  const res = fetch("https://dummyjson.com/products/1");
  const data = res.json();
   console.log(data);
//   await fetch("").then(res => res.json()).catch(err => console.log(err))
}
