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
function maxNumber(arr){
    for(var i = 0 ; i < arr.length; i++){let b = Math.max(...arr);
        
    }
return b;}

console.log(maxNumber([1,4,55]));