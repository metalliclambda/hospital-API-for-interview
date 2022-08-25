const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    _id : {
        type : String,
        required : true
    },
    psychiatrists : {
        type : Array,
        ref : 'Psychiatrist'
    }

});

module.exports = mongoose.model('Hospital', hospitalSchema);
