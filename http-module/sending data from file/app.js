const http = require("http");
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  if (req.url == "/") {
    res.end("<h1>Welcome to the Home page</h1>");
  } else if (req.url == "/data") {
    fs.readFile("./text.txt", "utf-8", (err, data) => {
      if (err) {
        res.end("<h3>Error reading file</h3>");
      } else {
        res.end(`<h3>${data}</h3>`);
      }
    });
  } else {
    res.end("Page not found");
  }
});

server.listen(PORT, () => {
  console.log(`server is listening: http://localhost:${PORT}`);
});
