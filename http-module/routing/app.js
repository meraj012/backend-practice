const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  if (req.url === "/") {
    res.write(`
         <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">Cart</a></li>
         </ul>
      `);
    return res.end();
  } else if (req.url === "/men") {
    res.end("<h1>Product for Men</h1>");
  } else if (req.url === "/women") {
    res.end("<h1>Product for Women</h1>");
  } else if (req.url === "/kids") {
    res.end("<h1>Product for Kids</h1>");
  } else if (req.url === "/cart") {
    res.end("<h1>Cart page</h1>");
  } else {
    res.end("page not found");
  }
});

server.listen(PORT, () => {
  console.log(`ser is running on:  http://localhost:${PORT}`);
});
