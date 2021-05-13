const numbers = [1, 0, 6, 6];
function every(array, action) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (!action(value, i, array)) {
      return false;
    }
  }
  return true;
}
console.log(every(numbers, (el) => typeof el === "number"));
