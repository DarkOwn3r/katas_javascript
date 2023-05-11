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
  const reverseStrWord = strWord.reverse()
  return reverseStrWord.join('');
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
};
