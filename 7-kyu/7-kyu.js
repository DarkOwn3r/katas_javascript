function getAVG (averageArray) {
  if (!Array.isArray(averageArray) ||
      averageArray.length === 0) {
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
    (number) => typeof number === 'number'
  )

  arrayOfRealNumbers.forEach(number => {
    sum += number
  });

  let avg = sum / arrayOfRealNumbers.length;
  return avg
}

function replaceVocalWithPosition (phrase) {
  if (typeof phrase !== 'string') {
    return null;
  }
  let phraseNumbers = [];
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === 'a' ||
        phrase[i] === 'e' ||
        phrase[i] === 'i' ||
        phrase[i] === 'o' ||
        phrase[i] === 'u' ||
        phrase[i] === 'A' ||
        phrase[i] === 'E' ||
        phrase[i] === 'I' ||
        phrase[i] === 'O' ||
        phrase[i] === 'U' ) {
          phraseNumbers += (i + 1);
    } else {
      phraseNumbers += phrase[i];
    }
  }
  return phraseNumbers;
}

function convertArrayStringsToArrayNumbers (arrayStrings) {
  if (!Array.isArray(arrayStrings)) {
    return [0];
  }
  let numberArray = [];
  for (let i = 0; i < arrayStrings.length - 1; i++) {
    if (typeof arrayStrings[i] !== 'number' &&
        typeof arrayStrings[i] !== 'string') {
      numberArray.push(parseInt(0));
    } else {
    numberArray.push(parseInt(arrayStrings[i]));
    }
  }
  return numberArray;
}

function getCenturyByYear (year) {
  return Math.floor((year-1)/100) + 1;
}

function removeValues () {
  
}

function buildArray(n, value1, value2) {
  let array = []
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      array.push(value1)
    }
    if (i % 2 === 1) {
      array.push(value2)
    }
  }
  return array;
}

module.exports = {
  getAVG,
  replaceVocalWithPosition, 
  convertArrayStringsToArrayNumbers,
  getCenturyByYear,
  removeValues,
  buildArray
};