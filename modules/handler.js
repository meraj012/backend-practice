const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Welcome to the Home page</h1>");
    res.end();
  } else {
    res.end("404 Error");
  }
};

const data = "xyz";

// module.exports = requestHandler;

// multiple exports using object (method 1)
module.exports = {
  handler: requestHandler,
  data: data,
};

// // setting multiple properties (method 2)
// module.exports.handler = requestHandler;
// module.exports.data = data;

// // shortcut using exports (method 3)
// exports.handler = requestHandler;
// exports.data = data;
