// Scope 
// Scope: Scope is crucial for writing robust and error-free code. It helps:
// Prevent naming collisions and unintended side effects.
// Enhance code readability and maintainability.
// Control variable lifetimes and accessibility, making debugging easier.

//Function Scope:  Variables declared inside a function are only accessible within that function. They are not accessible outside of the function in which they are defined.
//Example 
function myFunction() {
  var functionScopedVariable = "I am a function-scoped variable"; // function scope
  console.log(functionScopedVariable); // Output: I am a function-scoped variable
}

myFunction();

// console.log(functionScopedVariable); // Uncaught ReferenceError: functionScopedVariable is not defined


//Global Scope: Variables and functions declared in the global scope are accessible from anywhere in the code.
//Example
var globalVariable = "I am a global variable"; // global scope

function greet() {
  console.log(globalVariable); // Accessible inside the function
}

greet(); // Output: I am a global variable
console.log(globalVariable); // Output: I am a global variable



//Blocked Scope:  Variables declared inside a block (e.g., within curly braces {}) are only accessible within that block. This scope applies to variables declared with let or const.
//Example
if (true) {
  let blockScopedVariable = "I am a block-scoped variable"; // block scope
  console.log(blockScopedVariable); // Output: I am a block-scoped variable
}

// console.log(blockScopedVariable); // Uncaught ReferenceError: blockScopedVariable is not defined


// Variable
// A Variable is Container for storing data values. It allows you to save data that can be used and manipulated later in your program.
// Variable decleared using the keyword:
// var
// Scope: Variable are decleared with var are function scope or global scope
// Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
// Re-declaration: You can re-declare a var variable within the same scope without any error.

function testVar() {
  var x = 10;
  if (true) {
    var x = 20; // Same variable, scope is function-wide
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20 (still 20, because 'var' is function-scoped)
}

testVar();

// Global scope example
var y = 30;
console.log(y); // Output: 30

// Hoisting with var

console.log(y) // Output: undefined (hoisted, but not initialized)
var y = 5;
console.log(y) // Output: 5



// Let 
// Scope: let is block-scoped, meaning it is only accessible within the block (e.g., within {}) it was declared in.
// Hoisting: Variable declared with 'let' are also hoisted but are not intialized. Accessing them before decleration result in a `ReferenceError`.
// Re-declaration: You Canot re declare a `let` within the same scope.

function testLet() {
  let a = 5;
  if (true) {
    let a = 10;
    console.log(a)
  }
  // console.log(a) // Error: a is not defined, because let is blocked-scope.
}

testLet();


// Hoisting with let
// console.log(z) // Error: Cannot access 'z' before intialization
let z = 5;
console.log(z) // Output: 5

// Re-declaration
let b = 10;
// let b = 20; // Error: Identifier 'a' has already been declared.



// Cont 
// Scope: Like 'let', 'const' is blocked-scoped.
// Hoisting: Variables declared with `const` are also hoisted but not intialized. Accessing them before declaration results in `ReffernceError`.

