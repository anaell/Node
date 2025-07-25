const fs = require("fs");

const file = process.argv[2];

if (!file) {
  console.error("Did not use the script properly \nUse this way \nnode this-script [file to be read]");
  process.exit(1);
}

function read() {
  fs.readFile(file, 'utf8', (err, data) => {
    console.log(data);
    console.error(err)
  });
}
read();