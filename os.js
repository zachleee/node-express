const os = require("os");

const user = os.userInfo();
console.log(user);
// console.log(os.uptime() / 3600 / 24);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
