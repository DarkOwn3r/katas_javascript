function getHelloWorld() {
  return "Hello World";
}

function getStringByCondition(condition) {
  if (condition) {
    return "La condición es verdadera";
  } else {
    return "La condición es falsa";
  }
}

function addKataToInput(sentence) {
  return `${sentence} kata`;
}

function basicCalculator(number1, number2, operation) {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "/":
      return number1 / number2;
    case "*":
      return number1 * number2;
  }
}

function negativeNumber(number) {
  if (typeof number !== "number") {
    return null;
  }
  if (number < 0) {
    return number;
  }
  return number * -1;
}

function basicCalculatorWithValidation(number1, number2, operation) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }
  if (
    operation !== "+" &&
    operation !== "-" &&
    operation !== "/" &&
    operation !== "*"
  ) {
    return null;
  }
  return basicCalculator(number1, number2, operation);
}

function sumNumbersInArray(array) {
  let result = 0;
  if (!Array.isArray(array)) {
    return result;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      result += array[i];
    }
  }
  return result;
}

function countNegativeNumbersInArray(array) {
  let result = 0;
  if (!Array.isArray(array)) {
    return result;
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] < 0) {
      result++;
    }
  }
  return result;
}

function converToEuro(number) {
  if (typeof number !== "number") {
    return "0.00€";
  }
  return `${number.toFixed(2)}€`;
}

function abbreviateWords(word1, word2) {
  if (
    word1 === "" ||
    typeof word1 !== "string" ||
    word2 === "" ||
    typeof word2 !== "string"
  ) {
    return null;
  }
  return `${word1[0]}.${word2[0]}`;
}

function filterByWord(phrase, word) {
  if (typeof phrase !== 'string' || typeof word !== 'string') {
    return null;
  }
  return phrase.split(word).join('');
}

function reverse (word) {
  if (typeof word !== 'string') {
    return null;
  }
  const strWord = word.split('')
  const reverseStrWord = strWord.reverse();
  return reverseStrWord.join('');
}

function isAllUpperCase(word) {
  if (typeof word !== 'string') {
    return false;
  }
  if (word === word.toUpperCase()) {
    return true;
  }
}

function isPalindrome(word) {
  if (typeof word !== 'string') {
    return false;
  }
  const lowerWord = word.toLowerCase();
  const strWord = lowerWord.split('');
  const reverseStr = strWord.reverse();
  const reverseWord = reverseStr.join('');
  if (reverseWord === lowerWord) {
    return true;
  }
}

function filterAndReverse(word, filter, flag) {
  if (typeof word !== 'string' || 
      typeof filter !== 'string' || 
      typeof flag !== 'boolean') {
    return null;
  }
  if (flag) {
    const strWord = word.split(filter);
    const reverseStr = strWord.reverse();
    const reverseWord = reverseStr.join('');
    return reverseWord;
  } 
  return word.split(filter).join('');
}

function repeatWord(phrase, repeatNumber) {
  if (typeof phrase !== 'string' ||
      typeof repeatNumber !== 'number') {
     return null;
  }
  let word = '';
  for (let i = 0; i < repeatNumber; i++) {
    word += phrase;
  }
  return word;
}

function replaceWordInSentence(phrase, flag, word) {
  if (flag === '') {
    return phrase;
  }
  if (typeof phrase !== 'string' ||
      typeof flag !== 'string' ||
      typeof word !== 'string') {
    return null;
  }
  const flaglessPhrase = phrase.split(flag);
  const finalPhrase = flaglessPhrase.join(word);
  return finalPhrase;
}

function sumNumbersToFinalNumber (number) {
  if (typeof number !== 'number' ||
      number < 0)
  return 0;
  let sumatoria = 0;
  for (let i = 1; i <=  number; i++) {
    sumatoria += i;
  }
  return sumatoria;
}

//PRUEBA TÉCNICA

function largestExpression(a, b, c) {
  if (typeof a !== 'number' ||
      typeof b !== 'number' ||
      typeof c !== 'number') {
    return null;
  }
  let resultTemp = Infinity;
  for (let i = 0; i < resultTemp; i++) {
    let operation1 = a * (b + c);
    let operation2 = a * b * c;
    let operation3 = a + b * c;
    let operation4 = (a + b) * c;
    let operation5 = a + b + c;
    resultTemp = Math.max(operation1, operation2, operation3, operation4, operation5);
  }
  return resultTemp;
}

module.exports = {
  getHelloWorld,
  getStringByCondition,
  addKataToInput,
  basicCalculator,
  negativeNumber,
  basicCalculatorWithValidation,
  sumNumbersInArray,
  countNegativeNumbersInArray,
  converToEuro,
  abbreviateWords,
  filterByWord,
  reverse,
  isAllUpperCase,
  isPalindrome,
  filterAndReverse,
  repeatWord,
  replaceWordInSentence,
  sumNumbersToFinalNumber,
  largestExpression
};
