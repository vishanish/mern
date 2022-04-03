/* 
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar
// radar
// level
// tacocat
// kayak

// letter occurrence
// cancel out letter
// length? even


const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

// check length?
// {
//     a: 3,
//     d: 2
// }
// for in 
  // is Odd flag?
  // check odds/even? length?



/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/

function canBecomePalindrome(str) { 
      // If string is empty, return false
      if (str.length === 0) {
        return false;
    }
    
    // Create hashtable with letter characters as keys and frequency-counter as the respective value
    let frequencyCounter = {}; // instantiating empty hash table to retain all letter character occurences

    for (let i=0; i<str.length; i++) { // begin iterating over string
        if (frequencyCounter.hasOwnProperty(str[i])) { // check if letter character is already in hashtable as a key
            frequencyCounter[str[i]] += 1; // if it is, add 1 to its respective value
        } else {
            frequencyCounter[str[i]] = 1; // if it's not, create a key value pair and set its value to 1
        }
    }

    // Iterate through hash table, if all values are even return true or if all but one value is even return true
        // Otherwise return false
    let oddCounter = 0; // instantiate oddvalue counter which will trigger return false if it exceeds a value of 1

    for (counter of Object.values(frequencyCounter)) { // create array of the values within our hashtable and iterate over them
        if (counter%2===1) { // 
            oddCounter +=1
        }
        if (oddCounter > 1) {
            return false
        }
    }

    return true;
}

canBecomePalindrome(str1);
canBecomePalindrome(str2);
canBecomePalindrome(str3);
canBecomePalindrome(str4);
canBecomePalindrome(str5);

// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true