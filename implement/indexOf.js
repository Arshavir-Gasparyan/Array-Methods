const numbers = [1, 3, 5, 9, "some", 0];
function indexOf(array, item) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (item === element) {
      return i;
    }
  }
  return -1;
}
console.log(indexOf(numbers, 9));
