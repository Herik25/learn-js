// function sayMyName(name) {
//     name.split('').forEach(element => {
//         console.log(element);
//     });
// }

// sayMyName("harsh");

// function addTwoNumber(number1, number2) /*parametes => defenation */ {
//     console.log(number1 + number2);   
//     return number1 + number2;
// }

// addTwoNumber(3, 5); //arguments => values


function loginUser(username) {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUser())

// spread opr

// function calculatePrice(...nums) {
//     console.log(nums);
// }
// function calculatePrice(num1, num2, ...nums) {
//     console.log(num1);
// }

// calculatePrice(100, 200, 300, 400, 500);

// callbacks

// console.log(function () {
//     c = 2 + 2;
//     console.log(c);
// });


const user = {
    username: "Harsh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    name: "Harsh",
    price: 999,
})