const fs = require("fs").promises;

async function main() {
  let data = await fs.readFile("./readme.txt");
  console.log("1번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("2번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("3번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("4번", data.toString());
}
main();

// 비동기는 순서대로 호출되는 것이 아니다.
// 백그라운드로 넘어가면 동시에 실행된다.
