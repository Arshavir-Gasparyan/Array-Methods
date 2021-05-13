const numbers = ["a", "b", 3];
function some(array, action) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (action(value, i, array)) {
      return true;
    }
  }
  return false;
}
console.log(some(numbers, (el) => typeof el === "number"));
