const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const psychiatristSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    _id : {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('Psychiatrist', psychiatristSchema);
