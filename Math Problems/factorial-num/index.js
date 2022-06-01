// given n , find the factorial of it 4 = 1*2*3*4 = 24

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(3));

// O(n)
