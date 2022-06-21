// turn str into arr of words and map it and push the every selected word into new array if the new arr doesn't have it already
const removeDuplicates = (str) => {
  const arrOfWords = str.split(" ");
  let setOfWords = [];
  for (word of arrOfWords) {
    if (!setOfWords.includes(word)) {
      setOfWords.push(word);
    }
  }

  return setOfWords;
};

// convert str into arr of words and convert it into unique set of items and spread it into new arr

const removeDuplicates2 = (str) => {
  //const arrOfWords = str.split(" ");
  //let setStr = new Set(arrOfWords);
  //let result = [...setStr];
  //let result = Array.from(setStr);
  return [...new Set(str.toString().split(" "))];
};
