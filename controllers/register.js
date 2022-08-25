const Patient = require('../models/patient');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports.postRegister = async (req, res, next) => {

    let { name, address, email, phoneNumber, password , hospitalId , psychiatristId } = req.body;
    let photoAddress = req.file.path;

    try {
        password = await bcrypt.hash(password, saltRounds);

        const newPatient = new Patient({
            name,
            address,
            email,
            phoneNumber,
            password,
            photoAddress , 
            hospitalId , 
            psychiatristId
        });

        await newPatient.save();

        res.status(201).json({
            message: "Data Successfully uploaded",
            patient: {
                name,
                email
            }
        })

    } catch (error) {
        res.status(400).json({ message: error })
    }

};


