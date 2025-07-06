// VARIABLES
var name = "John";          // old method
let age = 25;               // preferred
const country = "India";    // constant

console.log("Name:", name);
console.log("Age:", age);
console.log("Country:", country);

// DATA TYPES
let num = 10;
let str = "Hello";
let isHappy = true;
let undef;
let nul = null;

console.log(typeof num, typeof str, typeof isHappy, typeof undef, typeof nul);

// OPERATORS
let a = 10, b = 3;

console.log("Arithmetic:");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);

console.log("Comparison:");
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);

console.log("Logical:");
console.log(true && false); // AND
console.log(true || false); // OR
console.log(!true);         // NOT

// CONDITIONAL
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// LOOPS
console.log("For loop:");
for (let i = 0; i < 3; i++) {
  console.log("Count:", i);
}

console.log("While loop:");
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

// FUNCTIONS
function greet(user) {
  return "Hello " + user + "!";
}
console.log(greet("Alice"));
