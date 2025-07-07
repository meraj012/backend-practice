const fs = require("fs");

// synchronous way of writing (overwrite the file if exist) file
try {
  fs.writeFileSync("bio.txt", "hi this is Meraj.");
  console.log("file created successfully");
} catch (err) {
  console.error("error while file create", err);
}

// asynchronous way of writing (overwrite the file if exist) file

const createFile = async () => {
  try {
    await fs.writeFile("bio.txt", "hello it's me Meraj.");
    console.log("file created successfully");
  } catch (err) {
    console.log("error while writing file", err);
  }
};

//
fs.writeFile("bio.txt", "I am a mern developer", (err) => {
  if (err) console.log(err);
  else console.log("file created successfully");
});
