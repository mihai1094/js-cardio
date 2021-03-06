// CHALLENGE 1: REVERSE A STRING
function reverseString(str) {
  return str.split("").reverse().join("");
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
function isPalindrome(str) {
  return str.split("").reverse().join("") === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
function reverseInt(int) {
  return Number(int.toString().split("").reverse().join(""));
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  let words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words;
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const lowerCaseStr = str.toLowerCase();
  const charMap = {};
  for (let char of lowerCaseStr) {
    console.log(charMap);
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz: ", i);
    } else if (i % 5 === 0) {
      console.log("Buzz: ", i);
    } else if (i % 3 === 0) {
      console.log("Fizz: ", i);
    } else {
      console.log(i);
    }
  }
}
