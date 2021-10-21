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

function chunkArray(arr, len) {}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}
