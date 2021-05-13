let users = [
  { id: 1, name: "Ann" },
  { id: 2, name: "Peter" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Mash" },
];
function find(array, action) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (action(value, i, array)) {
      result.push(value);
    }
  }
  return result;
}
console.log(find(users, (el) => el.id >= 2));
