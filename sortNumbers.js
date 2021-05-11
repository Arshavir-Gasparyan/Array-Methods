let numbers = [2, 3, 15, 7, 1];
function sort(numbers, x = "Asc") {
  if (x === "Asc") {
    return numbers.sort((a, b) => a - b);
  } else if (x === "Desc") {
    return numbers.sort((a, b) => b - a);
  }
}

console.log(sort(numbers));
