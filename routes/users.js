var express = require('express');
var router = express.Router();
let util = require('./util')
var path = require('path');
var fs = require("fs");
/* GET users listing. */
function studentform (req, res) {
  var form = {};
  form.name = req.body.name;
  form.studentID= req.body.studentId;
  form.grade = req.body.grade;
  form.school = req.body.school;
  form.major = req.body.grade;

 

    fs.readFile(path.dirname(__filename) + '/studentinfo.json','utf8',function (err, data) {
      if(err) console.log(err);
        var contents = JSON.parse(data);
        contents.push(form);
        fs.writeFile(path.dirname(__filename) + '/studentinfo.json',JSON.stringify(contents,null,4),'utf8',function(err){
          if(err) console.log(err);
          res.send(200);
        });
      
      })

    
}

module.exports = studentform;
