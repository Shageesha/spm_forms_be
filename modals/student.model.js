'use strict'

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    student_id: String,
    student_name: String,
    address: String,
    home_phone: Number,
    mobile: Number,
    email : String,
    semi:String,
    year:Number,
    cgpa:Number

});

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;