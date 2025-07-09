const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  if (req.url === "/" && req.method === "GET") {
    res.write("<h1>Welcome to the Home page</h1>");
    res.write('<form action="/submit-details" method="POST">');

    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"> <br>'
    );

    res.write('<label for="gender">Gender: </label>');

    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');

    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label> <br>');

    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log("chunk: ", chunk);
      body.push(chunk);
      console.log("body data: ", body);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("parsedBody: ", parsedBody);
      const params = new URLSearchParams(parsedBody);
      console.log("params: ", params);
      const jsonObject = {};
      for (const [key, value] of params.entries()) {
        jsonObject[key] = value;
      }
      console.log(jsonObject);
      const jsonString = JSON.stringify(jsonObject);
      console.log(jsonString);
      fs.writeFileSync("user.txt", jsonString);
    });
    // redirecting to the home page
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.write("page not found");
    return res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server is running on:  http://localhost:${PORT}`);
});

// chunk:  <Buffer 6e 61 6d 65 3d 4d 64 2b 4d 65 72 61 6a 2b 41 6e 73 61 72 69 2b 26 67 65 6e 64 65 72 3d 6d 61 6c 65>

// body data:  [
//   <Buffer 6e 61 6d 65 3d 4d 64 2b 4d 65 72 61 6a 2b 41 6e 73 61 72 69 2b 26 67 65 6e 64 65 72 3d 6d 61 6c 65>
// ]

// parsedBody:  name=Md+Meraj+Ansari+&gender=male

// params:  URLSearchParams { 'name' => 'Md Meraj Ansari ', 'gender' => 'male' }

// jsonObject: { name: 'Md Meraj Ansari ', gender: 'male' }

// jsonString: {"name":"Md Meraj Ansari ","gender":"male"}
