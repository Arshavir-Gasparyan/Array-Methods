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
const getUsersNamesLength = function (users) {
  return users.username.length;
};
const userNamesLength = users.map(getUsersNamesLength, 0);
console.log(userNamesLength);
