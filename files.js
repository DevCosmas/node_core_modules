const fs = require('fs');
const http = require('http');
const path = require('path');
const hostName = 'localhost';
const port = 3500;
const report = 'success';
// error handler
function errorHandler(err, report) {
  if (err) {
    console.log(`an error has occured: ${err}`);
    return;
  }
  console.log(report);
}
// creating new directory
const folder = path.join(__dirname, 'students');
fs.mkdirSync(folder);

// creating a new file: user.js
let content = " const name = 'ugwucosmas chibuike'";
const filePath = path.join(__dirname, 'students', 'User.js');
fs.writeFile(filePath, content, (err) => {
  errorHandler(err);
});

// updating the user.js content
const ageData = '\n const age = 20';
const sexData = '\n const sex = "male"';
const nationalData = '\n const nationality = "Nigeria"';
const phoneData = '\n const phone = "08111713529"';

fs.appendFile(
  filePath,
  `${ageData}${sexData}${nationalData}${phoneData}`,
  (err) => {
    errorHandler(err, report);
  }
);

// // updating student dir
const updatedFolder = path.join(__dirname, 'Names');
fs.rename(folder, updatedFolder, (err) => {
  errorHandler(err, report);
  console.log('dir renamed successfully');
});

// // // updating user.js
const updatedFile = path.join(__dirname, 'Names', 'Cosmas.js');
fs.rename(filePath, updatedFile, (err) => {
  errorHandler(err, report);
  console.log('file renamed successfully');
});

// reading files
fs.readFile(updatedFile, 'utf-8', (err, data) => {
  errorHandler(err, data);
});

// deleting file
fs.rm(updatedFile, (err) => {
  errorHandler(err, `file remove:${report}`);
});
// deleting directory
fs.rmdir(updatedFolder, (err) => {
  errorHandler(err, `dir remove:${report}`);
});

const server = http.createServer();
server.listen(port, hostName, () => {
  console.log('server is running');
});
