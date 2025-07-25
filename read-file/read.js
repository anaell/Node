const fs = require("fs");
const filePath = process.argv[2] || "example.txt";

if (!filePath) {
  console.error("Please provide a file path as an argument.");
  process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }
  console.log(`File content:\n${data}`);
});
