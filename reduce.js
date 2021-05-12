const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
let result = arr.reduce((sum, current) => {
  //   console.log(sum, current);

  if (current > 18) {
    sum += current;
  }
  return sum;
}, 0);
console.log(result);
