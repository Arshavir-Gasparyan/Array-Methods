const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 54,
  },
];
const result = users.reduce((acc, el) => {
  return acc + el.age / users.length;
}, 0);
console.log(result);
