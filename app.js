const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const addHospitals = require('./util/addHospitals');
const addPsychiatrists = require('./util/addPsychiatrists');

const registerRout = require('./routes/register');
const fetchRout = require('./routes/fetchAll');

const app = express();

app.use(express.json());

//routes
app.use('/register' , registerRout);
app.use('/fetch' , fetchRout);



mongoose.connect('mongodb://localhost:27017/latticeTest', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to DB');


        // inserting Hospitals and psychiatrists in the DB
        addHospitals();       
        // inserting Psychiatrists
        addPsychiatrists();
        // add Psychiatrists to hospitals
        


        app.listen(3000, (req, res) => {
            console.log('Server started');
        });
    })
    .catch(err => {
        console.log(err);
    });
