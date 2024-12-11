// console.log(23+97)

// console.log((4 + 6 + 9)/77)

// let a = 10
// console.log(a)

// console.log(a * 9)

// console.log(let b = 7 * a)

// intermediate array magic
//-------------------------
// As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:
// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers.

// first, we check if the number is even,
// if so, we triple it,
// then, we sum all the tripled numbers 

// function sumOfTripledEvens(array){
//     sum = 0;
//     for (let i = 0; i < array.length; i++){
//         let arrayNum = array[i];

//         if (arrayNum % 2 === 0){
//             sum += arrayNum * 3;
//         }
//     }
//     return sum // without this, calling the funtion would return undefined
// }

// console.log(sumOfTripledEvens([1, 2, 3, 4]))