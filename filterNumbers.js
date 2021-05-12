const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
const number = function (el) {
  if (typeof el === "number") {
    return el;
  }
};
const filter = arr.filter(number);
console.log(filter);
