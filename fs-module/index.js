const fs = require("fs");

// create file, overwrite the file if exist

// fs.writeFile("backend.txt", "Be good in JS to learn backend.", (err) => {
//   if (err) console.log(err);
//   else console.log("File is created.");
// });

fs.writeFile("intro.txt", "hi this is me Meraj", (err) => {
  if (err) console.log(err);
  else console.log("file create successfully.");
});

fs.writeFile(
  "intro.txt",
  "hi this is me Meraj a smart backend developer",
  (err) => {
    if (err) console.log(err);
    else console.log("file create successfully.");
  }
);
//read file

// fs.readFile("backend.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

//append file, adds data in file

// fs.appendFile("backend.txt", " Then it will easy to learn backend.", (err) => {
//   if (err) console.log(err);
//   else console.log("Data is appended");
// });

//rename file

// fs.rename("backend.txt", "learn-backend.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("file is renamed.");
// });

//copy file

// fs.copyFile("learn-backend.txt", "./copy/copy.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("file has been coppied.");
// });

//delete file

// fs.unlink("learn-backend.txt", (err) => {
//   if (err) console.log(err);
//   else console.log("file has beed removed.");
// });

// delete folder

// fs.rm("./copy", { recursive: true }, (err) => {
//   if (err) console.log(err);
//   else console.log("folder has been removed.");
// });

// fs.writeFileSync("backend.txt", "Welcome to the backend tutorial.");

// let data = fs.readFileSync("backend.txt", "utf-8");
// console.log(data);

// fs.appendFileSync("backend.txt", " How much you know the JS");
