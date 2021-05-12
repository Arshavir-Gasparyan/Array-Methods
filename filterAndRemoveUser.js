const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];
let filterUsers = users.find((item) => item.lang !== "ru");
console.log(filterUsers);
