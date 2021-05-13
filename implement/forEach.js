let numbers = [-5, 7, 11, -8, 0, 11];

function forEach(array, action) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    action(element, index, array);
  }
}
