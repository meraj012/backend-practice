const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  if (req.url == "/") {
    res.write("<h1>Welcome to Home page</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.write("<h1>Welcome to About page</h1>");
    res.end();
  } else if (req.url == "/contact") {
    res.write("<h1>Welcome to Contact page</h1>");
    res.end();
  } else {
    res.setHeader("Content-type", "text/plain");
    res.write("/error: page not found");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server is listening: http://localhost:${PORT}`);
});
