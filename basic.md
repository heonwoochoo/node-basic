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
