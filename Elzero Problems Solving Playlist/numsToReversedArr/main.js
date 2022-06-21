// convert numbers to string then to arr and make every string in the array a number then reverese the array

const numsToReveresedArr = (nums) => {
  return nums
    .toString()
    .split("")
    .map((x) => +x)
    .reverse();
};

// convert nums to string and map the string and insert every number in the first position in numsArr array
const numsToReveresedArr2 = (nums) => {
  const str = nums.toString();
  let numsArr = [];
  for (let num of str) {
    numsArr.unshift(+num);
  }
  return numsArr;
};
