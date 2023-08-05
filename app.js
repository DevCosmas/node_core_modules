const os = require('os');
const fs = require('fs');
const http = require('http');
const process = require('process');
const path = require('path');
const { resolve } = require('dns/promises');

const hostName = 'localhost';
const port = 3000;
const report = 'success';
// error handler
function errorHandler(err, report) {
  if (err) {
    console.log(`an error has occured: ${err}`);
    return;
  }
  console.log(report);
}

// // print out the current working directory
const cwd = path.resolve();
console.log(cwd);

// // // print out the path seperator symbol
const seperator = path.sep;
console.log(seperator);

// // print out the file extension
const ext = path.extname(
  'C:UsersUSERDesktopsecondSemester_assignmentsmodules.js'
);
console.log(ext);
// // print out the process id
const Id = process.pid;
console.log(`the node process id is :${Id}`);

// print out the user info of the OS
const user = os.userInfo();
console.log(user);

// // // print out the platform of an OS
const platform = os.platform();
console.log(platform);

// creating new directory
const folder = path.join(__dirname, 'students');
// fs.mkdirSync(folder);

// creating a new file: user.js
let content = " const name = 'ugwucosmas chibuike'";
const filePath = path.join(__dirname, 'students', 'Cosmas.js');
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
});

// // // updating user.js
const updatedFile = path.join(__dirname, 'students', 'Cosmas.js');
fs.rename(filePath, updatedFile, (err) => {
  errorHandler(err, report);
});

// reading files
fs.readFile(updatedFile, 'utf-8', (err, data) => {
  errorHandler(err, data);
});

// deleting file
fs.rm(updatedFile, (err) => {
  errorHandler(err, report);
});
// deleting directory
fs.rmdir(updatedFolder, (err) => {
  errorHandler(err, report);
});

const requestHandler = (req, res) => {
  const response = 'hello world';
  res.writeHead(200);
  res.end(response);
};
const server = http.createServer(requestHandler);
server.listen(port, hostName, () => {
  console.log('server is running');
});
