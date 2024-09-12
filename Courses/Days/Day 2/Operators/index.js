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