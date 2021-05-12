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
const getUserNames = function (users) {
  return users.username;
};
const userNames = users.map(getUserNames, 0);
console.log(userNames);
