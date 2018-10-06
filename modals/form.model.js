'use strict'

const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
    internshiptitle: String,
    specialization: String,
    fromdate: Date,
    todate: Date,

    //Training party - weekley bassis
    trainparty1: String,
    traindesc1:String,
    fromdate1:Date,
    todate1:Date,

    trainparty2: String,
    traindesc2:String,
    fromdate2:Date,
    todate2:Date,

    trainparty3: String,
    traindesc3:String,
    fromdate3:Date,
    todate3:Date,

    trainparty4: String,
    traindesc4:String,
    fromdate4:Date,
    todate4:Date,

    month:String,
    summary:String,
    details:String

});

const Form = mongoose.model('Form', FormSchema);

module.exports = Form;