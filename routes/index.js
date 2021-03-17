var express = require('express');
var router = express.Router();
// const StreamZip = require('node-stream-zip');
var fs = require("fs");
var JSZip = require("jszip")
router.get('/',  function(req, res, next) {
 
  fs.readFile("./assets/gtfs.zip",  function(err, data) {
    if (err) throw err;
     JSZip.loadAsync(data).then(function (zip) {
      
      // Read the contents of the 'Hello.txt' file
      zip.file("agency.txt").async("string").then( function (data) {
        // data is "Hello World!"
        res.send(data);
       
      });
    });
  
});
});

module.exports = router;
