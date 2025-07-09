const http = require("http");
const { handler, data } = require("./handler");
console.log(handler, data);
const PORT = 3000;

const server = http.createServer(handler);

server.listen(PORT, () => {
  console.log(`server is runnig: http://localhost:${PORT}`);
});
