const fs = require("fs");

//core modules can be used by import file system lib
fs.readFile("nomes.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(data);
});
