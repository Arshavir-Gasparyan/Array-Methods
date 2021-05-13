let users = [
  { id: 1, name: "Ann" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Mash" },
];
function find(array, action) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    let result = action(value, i, array);

    if (result) {
      return value;
    }
  }
}
console.log(find(users, (el) => el.id === 2));
