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
  
    clear() {
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

// Selection Sort
const selectionSort = (arr) => {
  let ixMin,temp;
  
  for (let i = 0; i < arr.length; i++) {
    ixMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[ixMin]) {
        ixMin = j;
      }
    }
    //swapping the selected item with the lowest
    //if its the lowset its gonna swap with itself
    temp = arr[i];
    arr[i] = arr[ixMin];
    arr[ixMin] = temp;
  }
  console.log("Selection Sort:\n", arr);
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

//Using Selection Sort Algorithm to sort the array
 selectionSort(nums.arr);



