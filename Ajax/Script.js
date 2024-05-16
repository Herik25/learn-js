// xhr.open("POST", "https://jsonplaceholder.typicode.com/todos");  post request
// xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true); get empoyee list
// console.log("this is ajax tutorial");

// btn.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://dummy.restapiexample.com/api/v1/employees", true);
//   xhr.onload = () => {
//     if (xhr.status === 200) {
//       let obj = JSON.parse(xhr.responseText);
//       console.log(obj);
//     } else {
//       console.log("error");
//     }
//   };

//   xhr.send()
// });

const btn = document.getElementById("fetchBtn");

btn.addEventListener("click", () => {
  console.log("btn is clicked");
  // const xhr = new XMLHttpRequest();
  // xhr.open( "GET","https://jsonplaceholder.typicode.com/todos", false)
  // xhr.onprogress= () => {
  //   console.log("data fetching is in progress");
  // }
  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     console.log(xhr.response);
  //   } else {
  //     console.log("there is an error");
  //   }
  // }
  // xhr.send()

  // console.log("this is final!");
});

//   function fetchPost() {
//     console.log("asdf");
//     const xhr = new XMLHttpRequest()
//     xhr.open("POST", "https://jsnplaceholder.typicode.com/todos", true)
//     xhr.setRequestHeader('Content-type', 'application/json');
//     const body = {
//       name: "harhs",
//       age: 30,
//       email: "harshparmar@gmail.com"
//     }

//     xhr.onload = () => {
//       console.log("data has been sent")
//     }

//     xhr.onerror = () => {
//       console.log("Error has been occured");
//     }

//     xhr.send(JSON.stringify(body))
//   }

//   fetchPost()

// const obj = {
//   name: "harhs",
//   age: 30,
//   email: "harshparmar@gmail.com",
// };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "POST",
//   headers: {
//     "Accept": "application/json",
//     "Content-Type": "application/json",
//   },
//   body: {obj},
// })
//   .then(() => console.log("data has been sent"))
//   .catch(() => console.log("there is error"));

data = {
  name: "harsh",
  rollNo: 21
}

const res = fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then(() => console.log("complete"))
  .catch((err) => console.log("there is an error"));
