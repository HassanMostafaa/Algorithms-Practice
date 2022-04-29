//Function to generate a random number between given max range
const genRandomNum = (max) => {
    return Math.floor(Math.random() * max);
  };
  // class with an array features
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
      console.log("Original Array:\n", this.arr);
    }
  
    clear() {
      for (let index = 0; index < this.upper; index++) {
        this.arr[index] = 0;
        this.numElement = 0;
      }
    }
  }
  
  // ceate an array using the array class nammed nums
  var nums = new CArray(5);
  
  //populate the array with random numbers generated 5 times
  for (let i = 0; i < 5; i++) {
    nums.insertItem(genRandomNum(100));
  }
  //display the array content
  nums.displayElements();
  
  // BASIC INSERTION SORT ALGORITHM
  const insertionSort = (arr) => {
    /* 
    insertion sort selects the second ele in array [i]
    and compares it with the one before it [j]
    if its -[i]- smaller swaps it and go back another one (j--)
    in a while() loop 
    */
    for (i = 1; i < arr.length; i++) {
      let temp = arr[i];
      let j = i - 1;
      let arrJ = arr[j];
  
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        arrJ = arr[j];
        j--;
      }
  
      arr[j + 1] = temp;
    }
    return arr;
  };
  
  /* Sort the array with the insertion sort algorithm
  and console log it with describtion */
  console.log("Insertion Sorted:\n", insertionSort(nums.arr));
  
  //Selection Sort Revision
  const selectionSort = (array) => {
    //selects ele and compares it with the rest
    //determine the minimum one and swap it with the selected ele
    for (let i = 0; i < array.length; i++) {
      let ixMin = i;
      let temp = array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[ixMin]) {
          ixMin = j;
        }
      }
      array[i] = array[ixMin];
      array[ixMin] = temp;
    }
    return array;
  };
  
  // Sort the array with the selection sort algorithm
  //and console log it with describtion
  console.log("Selection Sorted:\n", selectionSort(nums.arr));
  