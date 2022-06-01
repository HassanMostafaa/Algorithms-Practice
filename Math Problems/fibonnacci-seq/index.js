// fib is seq which two numbers added equals the third
// [0,1,1,2,3,5,8]

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(5));

// Big-O O(n)
