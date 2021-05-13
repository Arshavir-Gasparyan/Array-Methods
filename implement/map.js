function map(array, action) {
  const arr = [];
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];

    arr[index] = action(element, index, array);
  }

  return arr;
}
console.log(map([1, 6, 8, 0, -3], (el) => el));
