const express = require('express');
const router = express.Router();
const registerController = require('../controllers/register');
const upload = require('../middleware/multer');
const { userValidationRules, validate } = require('../middleware/patientValidator');

router.post('/', 
    upload.single('pic') , 
    userValidationRules() , validate , 
    registerController.postRegister
);

module.exports = router;
