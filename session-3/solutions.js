// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
}

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
function _isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function sumAllPrimes(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (_isPrimeNumber(i)) {
      sum += i;
    }
  }
  return sum;
}
// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
function seekAndDestroy(arrayInput, ...args) {
  return arrayInput.filter((el) => {
    if (args.indexOf(el) !== -1) {
      return false;
    }
    return true;
  });
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortPeople(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function findTrees(peopleAndTrees) {
  const treeIdxs = [];
  const people = [];
  for (let i = 0; i < peopleAndTrees.length; i++) {
    if (peopleAndTrees[i] === -1) {
      treeIdxs.push(i);
    } else {
      people.push(peopleAndTrees[i]);
    }
  }

  sortPeople(people);
  return { treeIdxs, people };
}

function sortByHeight(peopleAndTrees) {
  const { treeIdxs, people } = findTrees(peopleAndTrees);
  const result = [];

  const totalElements = treeIdxs.length + people.length;
  let idx = 0;

  for (let i = 0; i < totalElements; i++) {
    if (treeIdxs.indexOf(i) !== -1) {
      result.push(-1);
      continue;
    } else {
      if (idx <= people.length) {
        result.push(people[idx]);
        idx++;
      }
    }
  }
  return result;
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
  const charArr = str.split("");
  const result = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  alphabet.length = alphabet.indexOf(charArr[charArr.length - 1]);

  for (let char of alphabet) {
    if (charArr.indexOf(char) === -1) {
      result.push(char);
    }
  }

  if (result) {
    return result.join("");
  }
  return undefined;
}

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arrInput) {
  let oddSum = 0;
  let evenSum = 0;

  for (let el of arrInput) {
    if (el % 2 === 0) {
      evenSum += el;
    } else {
      oddSum += el;
    }
  }
  return [oddSum, evenSum];
}
