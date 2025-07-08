const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(req, req.url, req.method);
  res.write("hi");
  res.end();
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
