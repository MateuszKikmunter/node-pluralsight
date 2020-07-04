const fs = require("fs");

// !!WHEN USING FILE DESCRIPTOR WE HAVE TO CLOSE THE FILE MANUALLY !!
console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd);
  fs.closeSync(fd);
}
