// Define the tag function
function makeUppercase(strings, ...values) {
  let result = "";
  console.log(strings.length);
  for (let i = 0; i < strings.length; i++) {
    result += strings[i]; // Add the static part
    if (i < values.length) {
      result += values[i].toUpperCase(); // Add the dynamic part in uppercase
    }
  }

  return result;
}

// Variables to use in the template literal
const name = "Alice";
const city = "Wonderland";

// Use the tag function with the template literal
const message = makeUppercase`Hello, ${name}! Welcome to ${city}.`;

console.log(message); // Output: Hello, ALICE! Welcome to WONDERLAND.
