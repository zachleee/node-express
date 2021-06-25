const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home");
  } else if (req.url === "/about") {
    res.end("Yhpp is so cute");
  } else if (req.url === "/picture") {
    const img1 = fs.readFileSync("./content/image1.jpg");
    res.end(img1);
  } else {
    res.end(`
        <p>Something Wrong!</p>
        <img src="./content/image1.jpg" >
        <a href="/">back to home</a>
    `);
  }
});

server.listen(5000);

// res.end(`
//     <h1>Oops!</h1>
//     <p>We can't seem to find the page you are looking for</p>
//     <a href="/">back home</a>
//     `)
