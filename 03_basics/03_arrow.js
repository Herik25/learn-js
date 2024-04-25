const user = {
    username: "Harsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "harsh"
// user.welcomeMessage()

// console.log(this);

// function func(){
//     let username = "Harsh"
//     console.log(this.username);
// }

// func()

// const func = function () {
//     let username = "Harsh"
//     console.log(this.username);
// }

const func =  () => {
    let username = "Harsh"
    console.log(this);
}


// func()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Harsh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()