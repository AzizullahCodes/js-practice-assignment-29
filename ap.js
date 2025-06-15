// js-problem solving practice assignment - 29
// _______________________________________________________________________
// ques no 1 
//  Multiply Three Numbers
// Write a function multiplyThree(a, b, c) that returns the result of
//  a * b * c.
//  ans 
// let a = parseFloat(prompt('enter number 1'));
// let b = parseFloat(prompt('enter number 2'));
// let c = parseFloat(prompt('enter number 3'));
// function multiplyThree(a,b,c){let result = a * b * c;
//     return result;
// }
//   let finalOutput = multiplyThree(a,b,c);
//   console.log(finalOutput);
// ==========================================================================================
// ques no 2
//  Get Last Character
// Create a function getLastChar(str) that returns the last character of 
// a string.
// ans 
// let str = prompt('enter string');
// function getLastChar(str){let result = str.charAt(str.length - 1);
//     return result;
// }
// let finalOutput = getLastChar(str);
// console.log(finalOutput);
// =========================================================================================
// ques no 3
//  Celsius to Fahrenheit
// Write a function toFahrenheit(celsius) that converts Celsius to Fahrenheit 
// using the formula:
// F = (C × 9/5) + 32
// let celsius = parseFloat(prompt('enter celsius temperature'));
// function toFahrenheit(celsius){let result = (celsius * 9 / 5) + 32;
//     return result;
// }
// let finalOutput = toFahrenheit(celsius);
// console.log(finalOutput);
// ========================================================================================
// ques no 4
// Check Voting Eligibility
// Create a function canVote(age) that returns:
// "Eligible" if age is 18 or more
// "Not eligible" if less than 18
 
// ans 
// let enterage = parseInt(prompt('enter your age'));
// function canVote(enterage){if(enterage >= 18)
// {console.log('Eligible')}
// else{console.log('Not eligible')}
// }
// canVote(enterage);
// ======================================================================================
// ques no 5
//  Count Characters
// Write a function countCharacters(str) that returns the number of 
// characters in the given string.
// ans 
// let str  = prompt('enter string');
// function countCharacters(str){let result = str.length;
//     return result;
// }
//  let finalOutput = countCharacters(str);
//  console.log(finalOutput);
// ------------------------------------------------------------------------------------
// ques no 6
// Reverse a String
// Write a function reverseString(str) that returns the reverse of the string.
// "hello" → "olleh"
// ans 
// let str = prompt('enter string');
// function reverseString(str){let reversed = '';
//     for(var i = str.length-1 ;  i >= 0; i --)
//     {reversed = reversed + str[i]}
// return reversed;
// }
// let finalOutput = reverseString(str);
// console.log(finalOutput);
// =======================================================================================
// ques no 7
// reverse str
// ans 
/*let str = prompt('enter string ');
function reverseString(str){let reversed = '';
    for(var i = str.length-1; i >= 0; i--){reversed = reversed + str[i]}
    return reversed;
}
let finalOutput = reverseString(str);
console.log(finalOutput);*/

// ---------------------------------------------------------------------------------------------------
// ques no 8
// reverse string
// ans 
// let str = prompt('enter string');
// function reverseString(str){let reversed = '';
//     for(i = str.length-1; i >= 0; i--){reversed = reversed + str[i]}
//     return reversed;
// }
// let finalOutput = reverseString(str);
// console.log(finalOutput);
// ________________________________________________________________________________________________________
// ques no 9
// 
// Create a function removeSpaces(str) that returns the string without any
//  spaces.
// Example: "Hello World" → "HelloWorld"
// ans 
// function removeSpaces(str){let result = '';
//     for(var i = 0; i < str.length; i++){if(str[i] !== ' '){result = result + str[i]}}
//     return result;
// }
// console.log(removeSpaces('hell wrol'));
// _______________________________________________________________________________________
// ques no 10
// Repeat Last Character
// Write a function repeatLastChar(str, times) that repeats the last
//  character of the string a given number of times and returns it.
// Example: "abc", 3 → "ccc"
// ans 
// function repeatLastChar(str,times){let lastcharacter = str[str.length-1];
//     let result = '';
//     for(var i = 0 ; i < times; i ++){result = result + lastcharacter}
//     return result;
// }
// let finalOutput = repeatLastChar('hello',4);
// console.log(finalOutput)
// __________________________________________________________________________
// ques no 11
// reapeat last character of string
// ans 

// let str = prompt('enter an string');
// let times = parseFloat(prompt('enter times you want to repeat last character of string'));
// function repeatLastChar(str,times){let last = str[str.length-1];
//     let result = '';
//     for(var i = 0; i < times ; i++){result = result + last;}
//     return result;
    
// }
// let finalOutput = repeatLastChar(str,times);
// console.log(finalOutput)

// _______________________________________________________________________________
// ques no 12 
// reverse string
// ans 
// let str = prompt('enter string');
// function reverseString(str){let reversed = '';
//     for(var i = str.length-1; i >= 0; i--){reversed = reversed + str[i]}
//     return reversed;
// }
// let finalOutput = reverseString(str);
// console.log(finalOutput);
// ___________________________________________________________________________________
// ques no 13
// remove space between string 
// ans 
// let str = prompt('enter string');
// function removeSpaces(str){let removed = '';
//     for(var i = 0 ; i < str.length; i++){if(str[i] !== ' '){removed = removed + str[i]}}
// return removed;}
// let finalOutput = removeSpaces(str);
// console.log(finalOutput);
// ______________________________________________________________________________________
// ques no 14
// Double Each Number in an Array
// Write a function doubleArray(arr) that takes an array of numbers and 
// returns a new array where each number is doubled.
// Example: [1, 2, 3] → [2, 4, 6]
// ans 

// function doubleArray(arr){ let arr2 = [];
//     for(var i = 0; i < arr.length;i++){ arr2.push(arr[i]*2)}
//     return arr2;
    
    
// }

// console.log(doubleArray([1,2,3]))
// console.log(doubleArray([4,5,13]))
// ______________________________________________________________________________
// ques no 15
// Square Each Number in an Array
// Write a function squareArray(arr) that takes an array of numbers 
// and returns a new array where each number is squared.
// Example: [2, 3, 4] → [4, 9, 16]
// ans
// function squareArray(arr){let newArray = [];
//     for(var i = 0; i < arr.length; i++ ){newArray.push(arr[i]*arr[i])}
//     return newArray;}
// console.log(squareArray([2,3,4]));
// console.log(squareArray([8,9,2]));
// _______________________________________________________________________________
// ques no 16
// Write a function getEvenNumbers(arr) that returns a new array containing 
// only the even numbers from the input array.
// Example: [1, 2, 3, 4, 5] → [2, 4]
// ans 
// function getEvenNumbers(arr){let newArray = [];
//      for(var i = 0; i < arr.length; i ++){if(arr[i] % 2 === 0){newArray.push(arr[i])}}
// return newArray;}
// console.log(getEvenNumbers([1,2,3,4,5,6]))
// ______________________________________________________________________________________
// ques no 17
//  Find Maximum Number
// Write a function maxNumber(arr) that returns the largest number in 
// the array.
// Example: [10, 20, 5, 30] → 30
// ans 
// Function to find the maximum number in an array
// function maxNumber(arr) {
//   // Assume the first element is the maximum
//   let max = arr[0];

//   // Loop through the array starting from index 1
//   for (let i = 1; i < arr.length; i++) {
//     // If the current element is greater than max, update max
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }
// console.log(maxNumber([10, 20, 5, 30])); // Output: 30
// console.log(maxNumber([-5, -2, -10, -1])); // Output: -1
// console.log(maxNumber([100])); // Output: 100
// --------------------------------------------------------------------------------------
// ques no 18
// Sum All Numbers in an Array
// Write a function sumArray(arr) that returns the sum of all numbers in 
// the array.
// Example: [5, 10, 15] → 30
// ans 
// function sumArray(arr){let result =0;
//     for(let i = 0; i < arr.length; i++){result = result + arr[i]
//     }
//     return result;
// }
// console.log(sumArray([2,3,4]));
// _______________________________________________________________________________________
// ques no 19
//  Multiply All Numbers in an Array
// Write a function multiplyArray(arr) that returns the product 
// (multiplication result) of all numbers in the array.
// Example: [2, 3, 4] → 24

// ans 
// function multiplyArray(arr){let product = 1;
//     for(let i = 0; i < arr.length; i++){product = product * arr[i]}
//     return product;
// }
// console.log(multiplyArray([2,3,4]))
// ________________________________________________________________________________________
// ques no 20
// Check If All Numbers Are Positive
// Write a function allPositive(arr) that returns true if all numbers in
//  the array are positive, otherwise false.
// Example: [1, 2, 3] → true
// Example: [1, -2, 3] → false
// ans 
// function allPositive(arr){for(let i = 0 ; i < arr.length; i ++){if(arr[i]  > 0)
// {console.log('all numbers are positive')}
// else{console.log('all numbers are not positive')}
// }}
// allPositive([1,4,5]);
// ______________________________________________________________________________________
// ques no 21
// a2-2ab + b2
// ans function handleSquareRoot(num){return num * num;}

     
    //    function handleSquareRoot(num){return num * num;}

    //   function handleEquation(a,b){
    //  var eq = handleSquareRoot(a) - (2*a*b) + handleSquareRoot(b);
    //  console.log(eq);
    //  };
    //  handleEquation(2,3)
    // ____________________________________________________________________
    // ques no 22
    // Write two functions:

// findSquare(num) — returns the square of a number.

// findCube(num) — returns the cube of a number.

// Then write another function calculateExpression(a, b) that computes:
// a2 + 2ab + b3
 
// and shows the result in the console.
// ans 
// function findSquare(num){return num * num;
// }
// function findCube(num){return num * num * num;}

// function calculateExpression(a,b){var eq = findSquare(a) + (2 * a * b) + findCube(b);
//     console.log(eq);
// }
// calculateExpression(2,3)
// __________________________________________________________________________________________
// ques no 23
//  Difference of Squares
// Write a function differenceOfSquares(x, y) that returns:
// Use another helper function square(num) that returns num * num.
// x2-y2
// Call it with any two numbers and print the result.
// ans 
// function squareRoot(num){return num * num;}

// function formulaFunction(x,y){let result = squareRoot(x) - squareRoot(y);
//     console.log(result)
// }
// formulaFunction(3,2)
// _______________________________________________________________________________________
// ques no 24
//  Average and Double
// Write two functions:

// findAverage(a, b) — returns the average of two numbers.

// doubleValue(num) — returns double the number.

// Then write a function processNumbers(x, y) that:

// Finds the average of x and y

// Doubles that average

// Prints the result.
// ans 
// function doubleValue(num){return num+num;}

// function processNumbers(x,y){let a = doubleValue(x);
//     let b = doubleValue(y);
//     console.log(a);
//     console.log(b);
//     let avg = a + b /2;
//     console.log(avg)
// }
// processNumbers(2,3)
// _______________________________________________________________________________________
// ques no 25
// Write two functions:
// 1️⃣ greet(name) — takes a name as argument and prints "Hello, <name>!".
// 2️⃣ introduce(name, age) — calls greet(name) inside it and then prints "You are <age> years old.".
// Then call introduce("Ali", 25).
// ans 
// Function greet(name)
// This function takes a name and prints a greeting
// function greet(name) {
//   console.log("Hello, " + name + "!");
// }

// // Function introduce(name, age)
// // This function calls greet(name) and then prints age info
// function introduce(name, age) {
//   greet(name); // Call greet() inside introduce()
//   console.log("You are " + age + " years old.");
// }

// // Call introduce() with example arguments
// introduce("Ali", 25);
// _______________________________________________________________________________
// ques no 26
// Add & Multiply
// Question:
// Write two functions:
// add(a, b) — returns the sum of two numbers.
// multiplySum(a, b, c) — calls add(a, b) and multiplies the result by c.
//  Then print the final result.
// Call multiplySum(2, 3, 4).
// ans 
// function add(a,b){let sum= a + b;
//     return sum;
// }
// console.log(add(3,2));

// function multiplySum(a,b,c){add(a,b);
//     let total = add(a,b) * c;
//     console.log(total)
// }
// multiplySum(2,3,4);
// -----------------------------------------------------------------------------------
// ques no 27
// Say Hi & Full Welcome
// Question:
// Write two functions:
// sayHi() — prints "Hi there!".
// fullWelcome(name) — calls sayHi() and then prints "Welcome, <name>!".
// Call fullWelcome("Sara").
// ans 
// function sayHi(){console.log('Hi there !')}
// sayHi();

// function fullWelcome(name){sayHi();
//     console.log('welcome',name);
// }
// fullWelcome('Sara');
// ________________________________________________________________________________________
// ques no 28 ;
// calculation 
// ans
//  function subtractFunction(a,b){let subtract = a - b;
//     return subtract;
    
//  }
//  subtractFunction(4,2);

//  function multiplyFunction(a,b,c){subtractFunction(a,b);
//     let multiply = subtractFunction(a,b) * c;
//     return multiply;
    
//  }
// let nn = multiplyFunction(5,3,8);

// console.log(nn)
// ________________________________________________________________________
// ques no 29
// :

// Write a function addFunction(a, b) that returns the sum of two numbers.

// Write another function divideFunction(a, b, c) that:

// Uses addFunction(a, b)

// Divides the result by c

// Returns the answer.
// ans 
        //  function addFunction(a,b){let sum = a + b;
        //     return sum;
        //  }
        //  addFunction(4,2)
          
        //  function divideFunction(a,b,c){addFunction(a,b);
        //     let result = addFunction(a,b) / c;
        //     result = Math.floor(result);
        //     console.log(result)
        //  }
        //  divideFunction(8,2,3)
        // ________________________________________________________________________________
        // ques no 30
        //  Multiply and Add
// Write a function multiplyFunction(a, b) that returns the product of two numbers.

// Write another function addThenMultiplyFunction(a, b, c) that:

// Uses multiplyFunction(a, b)

// Adds c to the product

// Returns the final result.

// Call addThenMultiplyFunction(2, 5, 3) and print the result.
// ans 
// function multiplyFunction(a,b){let product = a * b;
//     return product;
// }
//  let b = multiplyFunction(2,3);

// function addThenMultiplyFunction(a,b,c){multiplyFunction(a,b);
//     let result = multiplyFunction(a,b) + c;
//     console.log(result);
// }
// addThenMultiplyFunction(2,3,2)
// ______________________________________________________________________________________
// question 31
// Divide and Subtract
// 1️⃣ Write a function divideFunction(a, b) that returns a / b.
// 2️⃣ Write a function subtractAfterDivide(a, b, c) that:

// Uses divideFunction(a, b)

// Subtracts c from the result

// Returns the answer.
// 3️⃣ Call subtractAfterDivide(20, 4, 2) and print the result.
// ans 
// function divideFunction(a,b){let divide = a / b;
//     return divide;
// }
// divideFunction(8,4)

// function subtractAfterDivide(a,b,c){divideFunction(a,b);
//     let result = divideFunction(a,b) - c;
//     console.log(result);
// }
// subtractAfterDivide(20,4,2);
// _________________________________________________________________________
// ques no 32
// Sum Three Numbers Using Two Functions
// 1️⃣ Write a function sumTwoNumbers(a, b) that returns the sum of two numbers.
// 2️⃣ Write a function sumThreeNumbers(a, b, c) that:
// Uses sumTwoNumbers(a, b) to get the partial sum
// Adds c to that sum
// Returns the final sum.
// 3️⃣ Call sumThreeNumbers(2, 3, 4) and print the result.

// ans 
// function sumTwoNumbers(a,b){let sum = a + b;
//     return sum;
// }
// sumTwoNumbers(2,3)

// function sumThreeNumbers(a,b,c){sumTwoNumbers(a,b);
//     let result = sumTwoNumbers(a,b) + c;
//     console.log(result);
// }
// sumThreeNumbers(2,3,1)
// ____________________________________________________________________________________
// ques no 33
// Double and Multiply
// 1️⃣ Write a function doubleNumber(num) that returns double the number.
// 2️⃣ Write a function multiplyAfterDouble(num, multiplyValue) that:

// Uses doubleNumber(num)

// Multiplies the doubled number by multiplyValue

// Returns the result.
// 3️⃣ Call multiplyAfterDouble(4, 3) and print the result.
// ans 
 function doubleNumber(num){let double = num + num;
     return double; }
 doubleNumber(5);

function multiplyAfterDouble(num,multiplyValue){doubleNumber(num);
     let result = doubleNumber(num) * multiplyValue;
    console.log(result)
 }
 multiplyAfterDouble(2,3);
