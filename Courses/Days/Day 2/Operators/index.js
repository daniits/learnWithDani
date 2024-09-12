// What is Operators? 
// In programming, operators are special symbols or keywords that perform operations on variables and values. 
// Operators are used to manipulate data and variables to produce results. 
// Different types of operators serve different purposes, such as performing mathematical calculations, assigning values, 
// comparing values, or combining logical conditions.

// Common Types of Operator We Used:

//// Realtional Operators
// Relational operators are used to compare two values or variables. The result of the comparison is always a boolean value: either true or false. 
// These operators allow you to compare numerical values, strings, or other data types that support comparison.

// Common Relational Operators:
// Equal To (==)
5 == 5   // true
5 == 10  // false

// Not Equal to (!=)
5 != 10   // true
5 != 5  // false


// Strictly Equal to (===)
// Similar to ==, but also checks for the data type in addition to value equality.
// Returns true only if both the value and type are the same.

5 === 5 // true
5 === "5" // False


// Strictly not equal to (!==)
// Similar to !=, but checks both value and type.
// Returns true if either the value or the type is different.
5 !== '5'   // true (types are different)
5 !== 5     // false (both value and type are the same)


// Greater than (>)
// Checks if the value on the left is greater than the value on the right.
10 > 5   // true
5 > 10   // false


// Less than (<)
// Checks if the value on the left is less than the value on the right.
5 < 10   // true
10 < 5   // false


// Greater than or equal to (>=)
10 >= 5   // true
5 >= 5    // true
3 >= 5    // false


// Less than or equal to (<=)
// Checks if the value on the left is less than or equal to the value on the right.
5 <= 5    // true
5 <= 10   // true
10 <= 5   // false

// Example 
let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}





// Logical Operators 
// Logical operators are used to combine or manipulate boolean (true/false) values and expressions. 
// They help in forming complex conditions by combining multiple relational or boolean expressions. 
// The result of logical operators is always a boolean value: true or false.

// AND (&&)
// The AND operator returns true if both operands (conditions) are true. If either operand is false, it returns false.

// condition1 && condition2

// Example 
let a = 5, b = 10;
console.log(a > 0 && b > 0);  // true (both conditions are true)
console.log(a > 0 && b < 0);  // false (one condition is false)


// OR (||)
// The OR operator returns true if at least one of the operands (conditions) is true. It only returns false if both operands are false.
// condition1 || condition2

// Example 
let c = 5, d = 10;
console.log(a > 0 || b > 0);  // true (first condition is true)
console.log(a < 0 || b < 0);  // true (second condition is true)
console.log(a < 0 || b > 0);  // false (both conditions are false)

// NOT (!)
// The NOT operator negates (inverts) a boolean value. It returns true if the operand is false and vice versa.
// !condition
let e = true;
console.log(!e);        // false (negates true)
console.log(!false);    // true (negates false)





// Example 
let ageNumber = 25;
let hasLicense = true;

if (ageNumber >= 18 && hasLicense) {
    console.log("You Can Drive")
} else {
    console.log("You Can Not Drive")
}

let isRaining = false;
let hasUmberele = true;

// Using OR (||) to check if either condiation is true
if (isRaining || hasUmberele) {
    console.log("You Are good to go")
} else {
    console.log("You Should Stay at Home")
}

// Use of Logical Operators in Conditional Statements:

let ageValue = 18;
let hasParentalConsent = true;

if (ageValue >= 18 || (ageValue >= 16 && hasParentalConsent)) {
    console.log("You can participate in the event.");
} else {
    console.log("You cannot participate in the event.")
}


// Unary Operators
// Unary operators are operators that operate on a single operand (hence the term "unary"). 
// These operators usually perform basic operations such as negation, incrementing, or type conversion.

// Unary Plus (+)
// The unary plus operator attempts to convert the operand into a number if it is not already. 
// It doesn't affect numbers but can convert non-numeric values to numbers (like strings or booleans).
let x = "5";
console.log(+x);  // 5 (converts string "5" to the number 5)

let y = true;
console.log(+y);  // 1 (converts boolean true to the number 1)


// Unary Negation (-)
// The unary negation operator negates the value of its operand (converts positive to negative and vice versa) or converts the operand to a number and negates it.
let g = 5;
console.log(-g);  // -5 (negates the value)

let h = "10";
console.log(-h);  // -10 (converts string "10" to number and negates it)


// Bouns Things 
// Prefix: The value is incremented first, then the result is used.
// Postfix: The original value is used first, then the value is incremented.


// Increment (++)
//  The increment operator increases the value of its operand by 1. It can be used in two forms:
let i = 5;
console.log(++i);  // 6 (prefix: increments first, then uses the value)

let j = 5;
console.log(j++);  // 5 (postfix: uses the original value, then increments)
console.log(j);    // 6 (after increment)


// Decrement (--)
// The decrement operator decreases the value of its operand by 1. Like the increment operator, it has prefix and postfix forms.
let k = 5;
console.log(--k);  // 4 (prefix: decrements first, then uses the value)

let l = 5;
console.log(l--);  // 5 (postfix: uses the original value, then decrements)
console.log(l);    // 4 (after decrement)


// Logical NOT (!)
// The logical NOT operator negates the truth value of its operand. If the operand is true, it becomes false, and if it is false, it becomes true.
let isTrue = true;
console.log(!isTrue);  // false (negates the boolean value)

let isFalse = false;
console.log(!isFalse); // true (negates the boolean value)


// Typeof Operator (typeof)
// The typeof operator returns a string that indicates the type of the operand (such as "number", "string", "boolean", etc.).

let num = 5;
console.log(typeof num);  // "number"

let str = "Hello";
console.log(typeof str);  // "string"

let obj = { name: "Alice" };
console.log(typeof obj);  // "object"


// Bitwise NOT (~)
// The bitwise NOT operator inverts the bits of its operand. It flips every bit in the binary representation of the operand (i.e., 0 becomes 1, and 1 becomes 0).
let yz = 5;  // Binary representation: 00000000000000000000000000000101
console.log(~yz);  // -6 (inverted binary becomes: 11111111111111111111111111111010)


// Delete Operator (delete)
// The delete operator is used to remove a property from an object.

let obje = { name: "Alice", age: 25 };
delete obje.age;
console.log(obje);  // { name: "Alice" } (age property is removed)


// Void Operator (void)
// The void operator evaluates an expression but returns undefined. It is rarely used but can be helpful in specific situations.
console.log(void 0);  // undefined (the expression `0` is evaluated but returns `undefined`)


// Example 
let o = 10;
let p = "15";

// Unary plus to convert string to number
console.log(+p);  // 15

// Unary negation to negate the value
console.log(-o);  // -10

// Increment and Decrement
console.log(++o); // 11 (increments first, then uses the value)
console.log(p--); // 15 (uses the value first, then decrements to 14)

// Logical NOT to invert boolean values
let isAvailable = true;
console.log(!isAvailable);  // false

// Typeof to check the type of a variable
console.log(typeof o);  // "number"
