const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",

    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];
let filterByField = users.filter((obj) => {
  if (obj.isAstronaut === true) {
    return obj;
  }
});
console.log(filterByField);
