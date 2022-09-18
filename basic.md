### Module 불러오기

---

**방법1.**
글로벌 객체의 module 활용

_var.js_

```js
const odd = "홀수입니다";
const even = "짝수입니다";

module.exports = { odd, even };
```

_func.js_

```js
const number = require("./var");
console.log(number.odd, number.even); // 홀수입니다 짝수입니다
```

</br>

**방법2.**
*pacage.json*에서
`"type": "module"`추가

_var.js_

```js
export const odd = "홀수입니다";
export const even = "짝수입니다";
```

_func.js_

```js
import { odd, even } from "./var.js";
console.log(odd, even); // 홀수입니다 짝수입니다
```

> _파일 간의 중복을 제거하기 위해 module을 활용하자_

</br>

### Node 내장 객체

---

_func.js_

> \_\_dirname: 현재 디렉토리 경로, \_\_filename: 현재 파일 경로

```js
console.log(__dirname);
//C:\Users\cngjs\Desktop\coding\node-basic
console.log(__filename);
//C:\Users\cngjs\Desktop\coding\node-basic\func.js
```

</br>

### this가 가리키는 값

---

전역스코프의 this는 module.exports를 가리키므로 {}가 된다

```js
console.log(this); // {}
console.log(this === module.exports); // true
console.log(module.exports); // {}

function a() {
  console.log(this === global); // true
}
a();
```

</br>

### Process

---

_현재 실행중인 노드 프로세스에 대한 정보를 담고 있음_
</br>

`process.env`  
시스템 환경 변수들이 들어있는 객체

- 비밀키를 보관하는 용도
- 환경변수는 process.env로 접근 가능

</br>

`process.nextTick()`  
이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선처리

- promise와 비슷하게 동작
- 비동기 처리 중 우선처리할 때 사용, 너무 남용시 다른 콜백 함수들의 실행이 늦어짐

```js
setTimeout(() => {
  console.log("timeout");
}, 0);
process.nextTick(() => {
  console.log("nextTick");
});
Promise.resolve().then(() => console.log("promise"));
console.log("hello");
/* 
hello
nextTick
promise
timeout
*/
```

</br>

`process.exit(0)`  
서버를 강제 종료해야할 때 사용, 인자값으로 0이 아닌 다른값이 들어갈 경우 에러가 난다.

</br>

### OS

---

_운영체제에 대한 정보를 가져올 때_

```js
const os = require("os");

os.cpus(); // cpu 정보
// 코어에 따라 서버를 띄워야할 개수를 조절할 때 참조할 수 있다.

os.homedir(); //홈디렉토리 경로 C:\Users\cngjs
os.freemem(); // 사용 가능한 메모리
os.totalmem(); // 전체 메모리 용량
```

</br>

### Path

---

운영체제 마다 경로처리를 구분하는 문자가 다르기에 정확한 경로를 만드는데 활용할 수 있다.

```js
const path = require("path");
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
파일경로를 분리해줌
 {
  root: 'C:\\',
  dir: 'C:\\Users\\cngjs\\Desktop\\coding\\node-basic',
  base: 'func.js',
  ext: '.js',
  name: 'func'
}
 */
```

### crypto

---

단방향 암호화의 대표 주자는 **해시 기법**

<br/>

## fs

---

파일시스템에 접근하는 모듈

```js
const fs = require("fs");

fs.promises
  .readFile("./readme.txt")
  .then((data) => console.log(data.toString()))
  .catch((err) => {
    throw err;
  });
```

> 프로미스로 사용이 가능하다.

```js
fs.promises
  .writeFile("./readme.txt", "글이 입력됩니다")
  .then(() => {
    return fs.promises.readFile("./readme.txt");
  })
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));
```

프로미스 체이닝을 이용하여 읽고 쓰기

비동기 -> 논블로킹

동기 -> 블로킹

서버에서는 대부분의 요청이 비동기로 처리된다.

```js
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
```

async-await을 이용하면 비동기처리를 순서대로 동작하게 짧은 코드로 작성할 수 있다
