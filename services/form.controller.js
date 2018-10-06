'use strict'

var express = require('express');
const bodyParser = require('body-parser');

var app = express.Router();
app.use(bodyParser.urlencoded({extended : false }));
app.use(bodyParser.json());

//Retrieve the form model
const formModel = require('../modals/form.model');

app.use(express.static(__dirname));

app.get('/forms/getforms',(req,res)=> {
    formModel.find().exec().then(forms => {
        res.json(forms);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.post('/forms/postforms' , (req,res)=> {

    var form = new formModel({
        internshiptitle: req.body.internshiptitle,
        specialization: req.body.specialization,
        fromdate: req.body.fromdate,
        todate: req.body.todate,

        trainparty1: req.body.trainparty1,
        traindesc1:req.body.traindesc1,
        fromdate1:req.body.fromdate1,
        todate1:req.body.todate1,
        trainparty2: req.body.trainparty2,
        traindesc2:req.body.traindesc2,
        fromdate2:req.body.fromdate2,
        todate2:req.body.todate2,
        trainparty3: req.body.trainparty3,
        traindesc3:req.body.traindesc3,
        fromdate3:req.body.fromdate3,
        todate3:req.body.todate3,
        trainparty4: req.body.trainparty4,
        traindesc4:req.body.traindesc4,
        fromdate4:req.body.fromdate4,
        todate4:req.body.todate4,

        month: req.body.month,
        summary:req.body.summary,
        details:req.body.details,

    });

    form.save().then(form => {
        res.json(form);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
});

app.delete('/forms/deleteforms' , (req,res) => {
    formModel.remove(req.params.id).then(()=>{
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });

});

module.exports = app;