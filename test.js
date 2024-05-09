// const msg ="lol"
try {
    // const user = {
    //     name: "harsh",
    //     price: 999,
    //     city: "jtp"
    // }
    // console.log(user.name2.color);
    // const msg = "asdf"
    console.log(msg);
    throw new Error("this is an erorr that is throwen by harsh")
} catch (error) {
    // const msg = "sdfjkajfskalfdkajl"
    // console.log("the msg is ",msg);
    console.log(error);
} finally {
    console.log("finally block");
}

console.log("it will be run");