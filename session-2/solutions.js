// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
function longestWord(words) {
  const wordsArr = words.split(" ");
  let longestWord = wordsArr[0];

  for (word of wordsArr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// SOLUTION 2 - Return an array and include multiple words if they have the same length
function longestWordS2(words) {
  const wordsArr = words.split(" ");
  let longestWord = wordsArr[0];
  const charMap = {};

  for (let word of wordsArr) {
    charMap[word] = word.length;
    if (word.length > longestWord.length) {
      longestWord = word.length;
    }
  }
  return Object.entries(charMap)
    .filter((charElement) => charElement[1] === longestWord)
    .flat();
}

// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
function longestWordS3(words) {
  const wordsArr = words.split(" ");
  let longestWord = wordsArr[0];
  let multipleLongWords;
  const charMap = {};

  for (let word of wordsArr) {
    charMap[word] = word.length;
    if (word.length > longestWord.length) {
      longestWord = word.length;
    }
  }

  multipleLongWords = Object.entries(charMap).filter(
    (charElement) => charElement[1] === longestWord
  );
  if (multipleLongWords.length > 1) {
    return multipleLongWords.flat();
  }
  return longestWord;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const result = [];
  let holder = [];
  // hold chunks of array
  // calculate remaining array and add to final array

  if (len > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (holder.length === len) {
        result.push(holder);
        holder = [];
        holder.push(arr[i]);
      } else if (holder.length <= len) {
        holder.push(arr[i]);
      }
    }
    if (holder) {
      result.push(holder);
    }
    return result;
  }
  return arr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
// ES6 way
function flattenArray(arrays) {
  return arrays.flat();
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

const mapper = (str) => {
  const charArr = str.split("");
  const charMap = {};
  for (let i = 0; i < charArr.length; i++) {
    charMap[i] = charArr[i];
  }
  return charMap;
};

function isAnagram(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}
