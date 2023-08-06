const http = require('http');
const hostName = 'localhost';
const port = 3550;
const report = 'success';
const requestHandler = (req, res) => {
  const response = 'hello world';
  res.writeHead(200);
  res.end(response);
};
const server = http.createServer(requestHandler);
server.listen(port, hostName, () => {
  console.log('server is running');
});
