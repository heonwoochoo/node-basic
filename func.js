console.log(this); // {}
console.log(this === module.exports); // true
console.log(module.exports); // {}

function a() {
  console.log(this === global); // true
}
a();
