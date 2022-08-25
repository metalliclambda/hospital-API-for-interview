const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photoAddress : {
        type : String ,
        required : true
    },
    hospitalId : {
        type : String , 
        required : true , 
        ref : 'Hospital'
    },
    psychiatristId : {
        type : String ,
        required : true , 
        ref : 'Psychiatrist'
    }
    
});

module.exports = mongoose.model('Patient', patientSchema);
