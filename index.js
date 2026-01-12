// server.js using CommonJS modules
const http = require('http'); // Import the http module

const hostname = '10.170.145.70';
const port = 5500;

// Create a server instance with a request handler callback
const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to OK
  res.setHeader('Content-Type', 'text/plain'); // Set the response header
  res.end('Hello, World!\n'); // Finalize and send the response
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});