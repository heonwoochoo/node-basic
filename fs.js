const fs = require("fs");

fs.promises
  .writeFile("./readme.txt", "글이 입력됩니다")
  .then(() => {
    return fs.promises.readFile("./readme.txt");
  })
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));
