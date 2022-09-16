const path = require("path");

// 운영체제 마다 경로처리를 구분하는 문자가 다르기에 정확한 경로를 만드는데 활용할 수 있다.

console.log(path.join(__dirname, "func.js"));
// C:\Users\cngjs\Desktop\coding\node-basic\func.js

console.log(path.dirname(__filename));
// C:\Users\cngjs\Desktop\coding\node-basic

console.log(path.extname(__filename));
// .js

console.log(path.basename(__filename));
// func.js

console.log(path.parse(__filename));
/*
 {
  root: 'C:\\',
  dir: 'C:\\Users\\cngjs\\Desktop\\coding\\node-basic',
  base: 'func.js',
  ext: '.js',
  name: 'func'
}
 */
