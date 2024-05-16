// window.addEventListener("load", function () {
//   alert("widnow is reloaded");
// });

// window.addEventListener("resize", function () {
//   alert("widnow is reloaded");
// });

// window.addEventListener("scroll", function () {
//   alert("widnow is reloaded");
// });

// const btn = document
//   .getElementById("btn")
//   .addEventListener("click", helloHarsh);
// function helloHarsh() {
//   console.log("hello harsh");
// }

// document.getElementById("btn").addEventListener("mouseover", () => {
//     alert("hello")
// })

// document.addEventListener("keydown", () => {
//     console.log("key is pressed");
// })

// const form = document.getElementById("myForm").addEventListener("submit", (event) => {
//     event.preventDefault()
//     // console.log(event);
//     console.log("form is submited");
// })

// window.addEventListener("click", () => {
//     console.log("window");
// },true)
// document.addEventListener("click", () => {
//     console.log("document");
// },true)
// document.getElementById("div2").addEventListener("click", (e) => {

//     console.log("div 2");
// },true)
// document.getElementById("div1").addEventListener("click", () => {
//     console.log("div 1");
// },true)
// document.getElementById("div3").addEventListener("click", () => {
//     console.log("div 3");
// },true)
// document.getElementById("btn").addEventListener("click", (e) => {
//     console.log("button");
// },true)

// const el = document.querySelectorAll(".items")
// console.log(el);

name = "asdf"

var person = {
    name: "jason",

    shout: function () {
        console.log("my name is ", this.name);
    },
    shout2: () => {
        console.log("my name is ", this.name);
    },
    shout3() {
        console.log("my name is ", this.name);
    }
};

person.shout();
person.shout2(); 
person.shout3(); 