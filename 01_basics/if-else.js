a = 2;
h = "harsh";

if (a === 2) {
  console.log("this is if 1");

  if (h === "harsh") {
    console.log("this is nested if");
    console.log("hi harsh");
  } else {
    console.log("nested else");
    console.log("this is not harsh");
  }
  console.log("if 1 close");
} else {
  console.log("this is else 1");
  console.log("this is nothing");
}

console.log("program is closed");
