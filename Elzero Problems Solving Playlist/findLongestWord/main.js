// convert the string into array of words and map on it and return the longest one with reduce()
const findLongestWord = (str) => {
  return str
    .split(" ")
    .reduce((acc, cur) => (cur.length > acc.length ? cur : acc));
};

/* 
convert the string into array of words and set the first word as the longest and 
map the array if found a bigger word set it as the longest 
*/

const findLongestWord2 = (str) => {
  const arrOfWords = str.split(" ");
  let longest = arrOfWords[0];
  for (word of arrOfWords) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
};

/*
conver str into arr of words and sort the array in descending order (from biggest to smallest) and return the first item
*/
const findLongestWord3 = (str) => {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
};
