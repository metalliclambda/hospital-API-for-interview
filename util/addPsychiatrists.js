const Psychiatrist  = require('../models/psychiatrist');


module.exports = async () => {
    let psychiatrists = await Psychiatrist.find();
    if (!psychiatrists.length > 0) {

        for (let i = 1; i < 21; i++) {
            Psychiatrist.create({
                name : `Dr number ${i}`,
                _id : i.toString()
            });         
        }
        
    }
}