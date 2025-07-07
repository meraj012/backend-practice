const fs = require("fs");

fs.rm("./backend", { recursive: true }, (err) => {
  if (err) console.log(err.message);
  else console.log("file deleted successfully.");
});
