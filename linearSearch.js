const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([2, -5, 3, 8, 0], 8));
console.log(linearSearch([2, -5, 3, 8, 0], 15));
