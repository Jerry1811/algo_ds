const recursiveFactorial = n => {
  if (n === 0) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(8));
console.log(recursiveFactorial(10));
console.log(recursiveFactorial(13));
