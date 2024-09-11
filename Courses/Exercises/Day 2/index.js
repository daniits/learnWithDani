// Problem To SOlve 


// Problem 1: Array Manipulation with Set
// You are given an array of numbers. You need to remove all duplicates and return the sorted version of the unique numbers array using a Set.
let number = [5, 6, 7, 9, 2, 3, 5, 7, 9, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9];

function uniqueSortedArray(arr) {
    let uniqueNumber = new Set(arr);
    return [...uniqueNumber].sort((a, b) => a - b);
}

console.log(uniqueSortedArray(number))



// Problem 2: Complex Object Manipulation
//  You are given an object representing items in a store. Your task is to calculate the total value of the items (price * quantity), 
//  filter out items with a quantity of zero, and sort by price in descending order.


let store = {
    item1: { name: "Laptop", price: 1500, quantity: 2 },
    item2: { name: "Phone", price: 800, quantity: 0 },
    item3: { name: "Monitor", price: 200, quantity: 10 },
    item4: { name: "Headphones", price: 100, quantity: 5 }
};

function processStoreItems(store) {
    // Filter items with quantity > 0 and calculate Total
    // it will convert Object into Array
    let filterdItems = Object.values(store).filter(item => item.quantity > 0).map(item => ({ ...item, totalValue: item.price * item.quantity }));

    return [...filterdItems].sort((a,b) => a.quantity -b.quantity);
}
console.log(processStoreItems(store))


// Problem 3
// Write a function deepEqual(a, b) that checks if two values are deeply equal. This means it should work for primitive values and objects. It should consider the following:
// If the values are primitives (like Number, String, Boolean, etc.), compare their values.
// If the values are objects, recursively compare each key-value pair.
// Handle edge cases where objects have different sets of keys or contain null or undefined.
function deepEqual(a, b) {
    // Your solution here
  }
  
  let obj1 = { a: 1, b: { c: 2 } };
  let obj2 = { a: 1, b: { c: 2 } };
  let obj3 = { a: 1, b: { c: 3 } };
  
  console.log(deepEqual(obj1, obj2)); // true
  console.log(deepEqual(obj1, obj3)); // false
  