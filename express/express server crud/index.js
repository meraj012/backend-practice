const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page.</h1>");
});

app.post("/adddata", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/students", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  console.log(data.students);
  res.send(data.students);
});

app.post("/students/add", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  console.log(db.students);
  const newData = req.body;
  db.students.push(newData);
  console.log(db.students);

  fs.writeFileSync("./db.json", JSON.stringify(db));
});

app.delete("/students/delete", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  const query = req.body;
  console.log(db);
  updatedStudents = db.students.filter((student, i) => {
    return student.name != query.name;
  });

  db.students = updatedStudents;
  console.log(db);

  fs.writeFileSync("./db.json", JSON.stringify(db));
  console.log("deleted...");
  res.send("deleted...");
});

app.put("/students/update", (req, res) => {
  const db = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
});

app.listen(4500, () => {
  console.log(`running on port 4500`);
});
