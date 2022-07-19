const findMostDup = (arr) => {
  // create empty object
  let ObjectOfArrKeys = {};
  // fill the object with keys as the numbsers in arr
  // and the value with how many times this key exists
  arr.forEach((x) => {
    ObjectOfArrKeys[x] = (ObjectOfArrKeys[x] || 0) + 1;
  });
  // create two arrays from the object one with keys and one with valus
  let arrayOfKeys = Object.keys(ObjectOfArrKeys);
  let arrayOfValues = Object.values(ObjectOfArrKeys);
  // find the index of the number most duplicated
  let indexOfNumMostDub = arrayOfValues.indexOf(Math.max(...arrayOfValues));

  return `${arrayOfKeys[indexOfNumMostDub]} is the number most duplicated of ${arrayOfValues[indexOfNumMostDub]} times`;
};
