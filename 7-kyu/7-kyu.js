function getAVG (averageArray) {
  if (!Array.isArray(averageArray) ||
      averageArray.length === 0) {
    return 0;
  }
  let sum = 0;
  let notNumberCounter = 0;
  for (let i = 0; i < averageArray.length; i++) {
    if (typeof averageArray.at(i) !== 'number') {
      sum += 0;
      notNumberCounter++;
    } else {
      sum += averageArray.at(i);
    }
  };
  return sum / (averageArray.length - notNumberCounter)
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
  for (let i = 0; i < arrayStrings.length; i++) {
    if (typeof arrayStrings[i] !== 'string') {
      numberArray.push(0);
    }
    numberArray.push(parseInt(arrayStrings[i]));
  }
  return numberArray;
}

function getCenturyByYear (year) {
  return Math.floor((year-1)/100) + 1;
}

module.exports = {
  getAVG,
  replaceVocalWithPosition, 
  convertArrayStringsToArrayNumbers,
  getCenturyByYear
};