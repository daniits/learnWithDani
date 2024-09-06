// Solve These Problem 
// Problem No 1.
// Please Tell the Output of these 
function testVariables() {
    var x = 10;
    let y = 20;
    const z = 30;

    if (true) {
        var x = 40;  // re-declaring and updating 'x'
        let y = 50;  // block-scoped 'y'
        const z = 60;  // block-scoped 'z'
        console.log(x); // Output 1
        console.log(y); // Output 2
        console.log(z); // Output 3
    }

    console.log(x); // Output 4
    console.log(y); // Output 5
    console.log(z); // Output 6
}

testVariables();

// Solution
// Outputs are These 
// 40
// 50
// 60
// 40
// 20
// 30
// Why it will not Throw error when we re-define const in block scope?
// Inside this block, a new variable z is declared with const. This z is different from any z declared outside this block.
// if (true) {
//     var x = 40;  // Function-scoped 'x', overwrites the previous 'x' from the outer function scope
//     let y = 50;  // Block-scoped 'y', only exists within this block
//     const z = 60;  // Block-scoped 'z', only exists within this block
//     console.log(x); // This logs 40 (since var x is function-scoped)
//     console.log(y); // This logs 50 (block-scoped let variable)
//     console.log(z); // This logs 60 (block-scoped const variable)
//   }
// The const z = 60; is not throwing an error because it is the first time z is being declared inside that specific block. 
// If you tried to re-declare or re-assign z within that same block, you would get an error

// What Was Output of this Code?
function checkAge(age) {
    if (age > 18) {
        const message = "hello"
    }
    else {
        const message = "hello world"
    }
    return message
}
console.log(checkAge(20))

// Solution
// The problem with this code lies in the scope of the const message variable. 
// Specifically, the variable message is declared inside the if and else blocks using const, which is block-scoped. 
// This means that message is only accessible within the block it is declared in, not outside of it.
// When the function reaches the return message statement, it tries to access message, but message is not accessible because it was declared within the if and else blocks.
function checkAge(age) {
    let message; // Declare message outside of the if-else block

    if (age > 18) {
        message = "hello"; // Assign value inside the block
    } else {
        message = "hello world"; // Assign value inside the block
    }

    return message; // Now message is accessible here
}

console.log(checkAge(20)); // Output: "hello"
console.log(checkAge(15)); // Output: "hello world"


// What Was Output of This 

function outerFunction() {
    console.log(a); // Output 1
    var a = 10;
    if (true) {
        let b = 20;
        console.log(b) // Output 2
        var c = 30; 
    }
    console.log(b) // Output 3
    console.log(c) // Output 4

    const d = 20;
    d = 40; // Throw Error 5
}
outerFunction();
console.log(a) // Output 6
console.log(b) // Output 7

// Solution 
// Output 1 Undefined But it will Not Throw Error Due To Hoisting
// Output 2 20 (b Value)
// Output 3 it will throw error that b is not defined and Function Execute 
// if i comment output three then Output 4 render 
// Output 4 30 
// Output 5 Throw we canot Assignment to constant variable.
// Comment Output 5 
// Output 6 and 7 a and b is not defined because it was not that function scope 

