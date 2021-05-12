const arr = ["1", "a3", "34"];

const parsInt = arr.map((el) => (el == Number(el) ? Number(el) : null));
console.log(parsInt);
