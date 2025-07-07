const fs = require("fs");

// synchronous way
try {
  fs.renameSync("bio.txt", "intro.txt");
  console.log("file renamed successfully.");
} catch (err) {
  console.log(err);
}

// asynchronous way
fs.rename("intro.txt", "bio.txt", (err) => {
  if (err) console.log(err);
  else console.log("file renamed successfully.");
});
