'use strict'

var express = require('express');
const bodyParser = require('body-parser');

var app = express.Router();
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//Retrieve the student model
const studentModel = require('../modals/student.model');

app.use(express.static(__dirname));

app.get('/students/getStudents',(req,res)=> {
    studentModel.find().exec().then(students => {
        res.json(students);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.post('/students/postStudents' , (req,res)=> {

    var student = new studentModel({
        student_id: req.body.student_id,
        student_name: req.body.student_name,
        address: req.body.address,
        home_phone: req.body.home_phone,
        mobile:req.body.mobile,
        email:req.body.email,
        semi:req.body.semi,
        year:req.body.year,
        cgpa:req.body.cgpa,

    });


    student.save().then(student => {
        res.json(student);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.delete('/students/deleteStudents' , (req,res) => {
    studentModel.remove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });

});

module.exports = app;