const fs = require("fs");

// it overwrites the file in wich data to be copied with the copied data
fs.copyFile("backend.txt", "./bio.txt", (err) => {
  if (err) console.log(err.message);
  else console.log("file copied successfully");
});
