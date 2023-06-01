function getAVG(averageArray) {
  if (!Array.isArray(averageArray) || averageArray.length === 0) {
    return 0;
  }
  let sum = 0;

  // let notNumber = 0;
  // for (let i = 0; i < averageArray.length; i++) {
  //   if (typeof averageArray.at(i) !== 'number') {
  //     notNumber++;
  //   } else {
  //     sum += averageArray.at(i);
  //   }
  // };

  const arrayOfRealNumbers = averageArray.filter(
    (number) => typeof number === "number"
  );

  arrayOfRealNumbers.forEach((number) => {
    sum += number;
  });

  let avg = sum / arrayOfRealNumbers.length;
  return avg;
}

function replaceVocalWithPosition(phrase) {
  if (!phrase || typeof phrase !== "string") {
    return null;
  }
  const vocals = ["a", "e", "i", "o", "u"];
  let phraseFormated = "";
  for (let i = 0; i < phrase.length; i++) {
    if (vocals.includes(phrase[i].toLowerCase())) {
      phraseFormated += i + 1;
    } else {
      phraseFormated += phrase[i];
    }
  }
  return phraseFormated;
}

function convertArrayStringsToArrayNumbers(arrayStrings) {
  if (!Array.isArray(arrayStrings)) {
    return [0];
  }
  let numberArray = [];
  for (const string of arrayStrings) {
    let number = 0;
    if (typeof string === "string") {
      const numberOfString = parseInt(string);
      if (!isNaN(numberOfString)) {
        number = numberOfString;
      }
    }
    numberArray.push(number);
  }
  return numberArray;
}

function getCenturyByYear(year) {
  return Math.floor((year - 1) / 100) + 1;
}

function removeValues(firstArray, secondArray) {
  if (!Array.isArray(firstArray)) {
    let emptyArray = [];
    return emptyArray;
  }
  if (!Array.isArray(secondArray)) {
    return firstArray;
  }
  const newArray = firstArray.filter(
    (element) => !secondArray.includes(element)
  );
  return newArray;
}

function buildArray(n, value1, value2) {
  let array = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      array.push(value1);
    }
    if (i % 2 === 1) {
      array.push(value2);
    }
  }
  return array;
}

function findDuplicates(array) {
  if (!Array.isArray(array)) {
    let emptyArray = [];
    return emptyArray;
  }
  const uniqueItems = [];
  const duplicatedItems = [];
  array.forEach((element) => {
    if (!uniqueItems.includes(element)) {
      uniqueItems.push(element);
    } else if (!duplicatedItems.includes(element)) {
      duplicatedItems.push(element);
    }
  });
  return duplicatedItems;
}

module.exports = {
  getAVG,
  replaceVocalWithPosition,
  convertArrayStringsToArrayNumbers,
  getCenturyByYear,
  removeValues,
  buildArray,
  findDuplicates,
};
