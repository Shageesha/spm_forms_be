'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

var router      = express.Router();

var FormRoute = require('./services/form.controller');
var StudentRoute = require('./services/student.controller');

mongoose.Promise=global.Promise;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//Mongo connection
mongoose.connect('mongodb://localhost:27017/spm-be-new',err =>{
    if (err){
        console.log(err);
        process.exit(1);
    }
});

app.use('/',FormRoute);
app.use('/',StudentRoute);

app.listen(3020, err => {
    if (err){
        console.error(err);
        return;
    }
    console.log('Listening to 3020 port');
});