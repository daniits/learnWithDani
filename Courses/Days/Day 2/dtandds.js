// Data Types & Data Structure
// Programming languages all have built-in data structures, but these often differ from one language to another.

// What is Data Type? 
// In JavaScript, data types and data structures play a fundamental role in how information is stored, accessed, and manipulated. 
// JavaScript Has Two Main Data Type: 

// Primitive Data Types 
// These are MOst Basic Data Type 

// Number: Represents numeric values (both integers and floating-point numbers).
let age = 25; // 25 is Number 
let pi = 3.14159; // 3.14159 is also data type is number

// String: Represents a sequence of characters (text).
let name = "John Doe"; // John Doe is String

// Boolean: Represents logical values, either true or false.
let isJavaScriptFun = true; // It will be True or False Values

// Null: Represents the intentional absence of a value. It is treated as an object but is a primitive.
let noValue = null;

// Undefined: Indicates a variable that has been declared but not assigned a value.
let undefinedVariable;

// Symbol: Introduced in ECMAScript 6 (ES6), it represents a unique identifier, often used for object properties.
let symbol1 = Symbol('unique');

// BigInt: Introduced in ES2020, it is used for working with large integers beyond the safe limit of Number.
let bigNumber = BigInt(9007199254740991);


// Non Premative Data Type
// These are mutable and can hold collections of data or more complex entities.

// Object: A collection of key-value pairs, where keys are strings or symbols and values can be any data type.
let person = { name: "John", age: 30 };

// Array: A special type of object used to store ordered collections of items (elements).
let fruits = ["apple", "banana", "cherry"];

// Function: A reusable block of code that can be called with arguments to perform a task.
function greet() { return "Hello!"; }



// JavaScript Data Structures:
// Data structures are ways of organizing and storing data so it can be accessed and used efficiently. 
// In JavaScript, several built-in data structures are available.

// Arrays: Arrays store an ordered list of items (elements). You can access elements by their index.
let number = [10, 20, 30]

// Objects: Objects store data in the form of key-value pairs. Keys are usually strings, and values can be any data type.
let car = { brand: "Toyota", model: "Camry", year: 2020 };

// Set: A collection of unique values, introduced in ES6. Unlike arrays, sets do not allow duplicate values.
let uniqueNumbers = new Set([1, 2, 3, 3, 4]); // [1, 2, 3, 4]


// Map: A collection of key-value pairs where keys can be of any type (not just strings like in regular objects). Introduced in ES6.
let myMap = new Map();
myMap.set('name', 'Alice');
myMap.set(42, 'answer');



// WeakSet: Similar to Set, but only allows objects as members, and it holds them weakly, meaning they can be garbage-collected 
//          if there are no other references to the object.
let weakSet = new WeakSet();
let obj = { name: "John" };

// WeakMap: Similar to Map but holds its keys weakly, meaning keys (which must be objects) can be garbage-collected if there are no other references to the object.
let weakMap = new WeakMap();
let keyObj = { id: 1 };
weakMap.set(keyObj, "someValue");




// Key Differences Between Data Types and Data Structures:
// data types are the building blocks of information in JavaScript, 
// while data structures are ways of organizing that information for efficient manipulation and access.