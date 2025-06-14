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