//Create Class with Array Features
class CArray {
  constructor(size) {
    this.arr = new Array(size);
    this.upper = size - 1;
    this.numElement = 0;
  }

  insertItem(item) {
    this.arr[this.numElement] = item;
    this.numElement++;
  }

  displayElements() {
    console.log("Origin Array:\n", this.arr);
  }

  clearArray() {
    for (let index = 0; index < this.upper; index++) {
      this.arr[index] = 0;
      this.numElement = 0;
    }
  }
}

//Random Number Generator Function
const genRandomNum = (max) => {
  return Math.floor(Math.random() * max);
};

// Bubble sort my way (the one makes sense xD)
const bubbleSortMine = (arr) => {
 
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  console.log("Bubble Sorted:\n", arr);
};

// Script In Action
// create new array with length 5
var nums = new CArray(5);

//populate the array 5 times with random number between 1 and 100
for (let i = 0; i < 5; i++) {
  nums.insertItem(genRandomNum(100));
}

//show array content
nums.displayElements();

//using bubble sort algorithm to sort the array
bubbleSortMine(nums.arr);
