/*eslint-disable*/
var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();

var DIR = './uploads/';

var upload = multer({ dest: './uploads' });
//  var PORT = process.env.PORT || 3000;
var PORT = 3001;


app.use(function(req, res, next) { //allow cross origin requests
  res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

// app.use(multer({
//   dest: DIR,
// //   rename: function (fieldname, filename) {
// //     return filename + Date.now();
// //   },
// //   onFileUploadStart: function (file) {
// //     console.log(file.originalname + ' is starting ...');
// //   },
// //   onFileUploadComplete: function (file) {
// //     console.log(file.fieldname + ' uploaded to  ' + file.path);
// //   }
// }));

app.get('/upload', function (req, res) {
  console.log("app.get('/upload', function (req, res)");
  console.log(file.fieldname + ' uploaded to  ' + file.path);
  res.end('file catcher example');
});

app.post('/upload', function (req, res) {
  console.log("app.post('/upload', function (req, res)");
  console.log(file.fieldname + ' uploaded to  ' + file.path);
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }

    res.end('File is uploaded');
  });
});

app.listen(PORT, function () {
  console.log('Working on port ' + PORT);
});

