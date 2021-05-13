const number = [1, 3, 8, 7, 9];
console.log(number.slice(1));
function slice(array, first = 0, last = array.length) {
  const result = [];

  for (let index = first; index < last; index += 1) {
    const value = array[index];

    if (index < array.length) {
      result.push(value);
    }
  }

  return result;
}
console.log(slice(number, 1));
