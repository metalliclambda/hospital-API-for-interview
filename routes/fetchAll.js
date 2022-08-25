const express = require('express');
const router = express.Router();
const fetchController = require('../controllers/fetch');
const upload = require('../middleware/multer');

router.get('/', 
    upload.none() , 
    fetchController.getFetch
);

module.exports = router;
