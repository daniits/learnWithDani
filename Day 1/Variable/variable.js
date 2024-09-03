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

// Var: Variable are decleared with var are function scope or global scope

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
  
  var y = 40; // No error, 'y' is re-declared
  console.log(y); // Output: 40
  