const fs = require("fs");

// synchronou way
try {
  fs.appendFileSync("bio.txt", "I am from Bihar");
  console.log("data appended successfully");
} catch (err) {
  console.log(err);
}

// asynchronous way
fs.appendFile("bio.txt", "I am persuing MCA from Manglayatan Univer", (err) => {
  if (err) console.log(err);
  else console.log("data appended successfully.");
});
