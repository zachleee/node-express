// console.log(__dirname);
// console.log(__filename);

// setInterval(() => {
//   console.log("hello");
// }, 1000);
// const { lzq, zyh } = require("./name");
// const sayHi = require("./utils");

// sayHi("Jaynee");
// sayHi(lzq);
// sayHi(zyh);

const items = [1, [2, [3, [4]]]];
console.log([...items]);
console.log(items.flat(2));
