const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  if (req.url === "/") {
    res.write(`
   <h1> You are welcome.</h1>
   <a href="/calculator">Calculator</a>
  `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.write(`
    <form action="/calculator-result" method="POST">
    <input type="text" id="num1" name="num1" placeholder="Enter first number">
     <input type="text" id="num2" name="num2" placeholder="Enter second number">
     <button type="submit">Add</button>
     <form>
    `);
    return res.end();
  } else if (req.url === "/calculator-result") {
    res.write("hello");
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server is running on: http://localhost:${PORT}`);
});
