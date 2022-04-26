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
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          //swap item with the item next to it
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
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





// BUBBLE SORT I DONT REALLY UNDERSTAND (length - i - 1)??????
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   console.log("sorted", arr);
// };