/**
 * JavaScript Playground File
 * This file contains various code examples demonstrating JavaScript concepts
 */

// Basic Arithmetic Operations
// --------------------------
// console.log(23+97)  // Simple addition
// console.log((4 + 6 + 9)/77)  // Addition and division

// Variable Declaration and Operations
// ---------------------------------
// let a = 10
// console.log(a)  // Output variable value
// console.log(a * 9)  // Multiplication with variable
// console.log(let b = 7 * a)  // Invalid syntax - declaration in console.log

/**
 * Array Processing Example: Sum of Tripled Even Numbers
 * This example demonstrates:
 * 1. Array iteration
 * 2. Conditional logic
 * 3. Mathematical operations
 * 4. Return values
 */
function sumOfTripledEvens(array){
    let sum = 0;  // Initialize sum variable
    for (let i = 0; i < array.length; i++){
        let arrayNum = array[i];

        // Check if number is even and triple it if true
        if (arrayNum % 2 === 0){
            sum += arrayNum * 3;
        }
    }
    return sum;  // Return the final sum
}

// Example usage:
// console.log(sumOfTripledEvens([1, 2, 3, 4]))

/**
 * Objects vs Primitives Example
 * Demonstrates the difference in behavior between:
 * - Objects (passed by reference)
 * - Primitives (passed by value)
 */

// Function that modifies an object (changes persist)
function increaseCounterObject(objectCounter) {
    objectCounter.counter += 1;  // Modifies the original object
}

// Function that modifies a primitive (changes don't persist)
function increaseCounterPrimitive(primitiveCounter) {
    primitiveCounter += 1;  // Only modifies local copy
}

// Example usage:
const object = { counter: 0 };
let primitive = 0;

increaseCounterObject(object);  // Object will be modified
increaseCounterPrimitive(primitive);  // Primitive remains unchanged

/**
 * Example of primitive value behavior:
 * > let a = 0
 * > function plusOne(variable){ variable = variable + 1; console.log(variable)}
 * > plusOne(a)  // Outputs 1
 * > plusOne(a)  // Still outputs 1
 * > plusOne(a)  // Still outputs 1
 * > a  // Original value remains 0
 */

