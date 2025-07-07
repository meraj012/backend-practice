const fs = require("fs");

// synchronous way
try {
  const data = fs.readFileSync("bio.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.log("Error while reading file:", err);
}

// asynchronous way
fs.readFile("bio.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});
